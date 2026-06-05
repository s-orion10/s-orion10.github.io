/* Animated background — a soft cosmic nebula that drifts slowly and shifts
   hue as the page scrolls (blue → violet → magenta on the cosmic palette).
   An optional faint dot/grid overlay can sit on top. Renders to
   <canvas id="bg-canvas">. Respects prefers-reduced-motion. */

(function () {
  // Hue stops per palette (degrees). The nebula interpolates a scroll-driven
  // rotation across these as you move down the page.
  const PALETTES = {
    cosmic: [250, 276, 300, 322], // blue → indigo → violet → magenta
    cobalt: [232, 244, 254, 266], // deep blues / indigo
    aurora: [214, 188, 166, 150], // blue → teal → green
  };

  function start({ pattern = "off", intensity = 40, palette = "cosmic" } = {}) {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf, w = 0, h = 0, time = 0;
    let mouseX = -9999, mouseY = -9999;
    let scrollPx = 0, scrollPhase = 0;
    let dirty = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let curPattern = pattern;
    let curIntensity = intensity;
    let curPalette = PALETTES[palette] ? palette : "cosmic";

    // Soft blob field — positions/sizes as fractions of the viewport.
    const blobs = [
      { ox: 0.20, oy: 0.16, r: 0.58, hue: 0, sx: 0.8, sy: 0.6, ph: 0.3, par: 0.05 },
      { ox: 0.80, oy: 0.30, r: 0.52, hue: 1, sx: 0.6, sy: 0.9, ph: 1.7, par: 0.12 },
      { ox: 0.50, oy: 0.62, r: 0.66, hue: 2, sx: 0.9, sy: 0.5, ph: 2.6, par: 0.02 },
      { ox: 0.12, oy: 0.82, r: 0.44, hue: 3, sx: 0.7, sy: 0.8, ph: 4.1, par: 0.16 },
      { ox: 0.90, oy: 0.74, r: 0.48, hue: 2, sx: 1.0, sy: 0.7, ph: 5.4, par: 0.09 },
    ];

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dirty = true;
    }
    resize();

    let varsCache = null;
    function readVars() {
      if (varsCache) return varsCache;
      const cs = getComputedStyle(document.documentElement);
      const theme = document.documentElement.getAttribute("data-theme") || "night";
      const ink = cs.getPropertyValue("--ink").trim();
      const accent = cs.getPropertyValue("--accent").trim();
      varsCache = { theme, ink, accent };
      return varsCache;
    }

    /* ---------- Nebula ---------- */
    function drawNebula(theme) {
      if (curIntensity <= 0) return;
      const hues = PALETTES[curPalette] || PALETTES.cosmic;
      const k = curIntensity / 100;
      const baseAlpha = (theme === "night" ? 0.52 : 0.30) * k;
      const hueShift = scrollPhase * 48; // rotate toward the warm end while scrolling
      const sat = theme === "night" ? 86 : 70;
      const light = theme === "night" ? 57 : 66;

      ctx.globalCompositeOperation = "lighter";
      for (const b of blobs) {
        const driftX = reduced ? 0 : Math.cos(time * 0.00016 * b.sx + b.ph) * 0.06;
        const driftY = reduced ? 0 : Math.sin(time * 0.00014 * b.sy + b.ph) * 0.05;
        const cx = (b.ox + driftX) * w;
        const cy = (b.oy + driftY) * h - scrollPx * b.par; // gentle parallax
        const R = b.r * Math.max(w, h);
        const hue = hues[b.hue] + hueShift;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
        g.addColorStop(0, `hsla(${hue}, ${sat}%, ${light}%, ${baseAlpha})`);
        g.addColorStop(0.45, `hsla(${hue}, ${sat}%, ${light}%, ${baseAlpha * 0.34})`);
        g.addColorStop(1, `hsla(${hue}, ${sat}%, ${light}%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";
    }

    /* ---------- Optional pattern overlay (dots / grid) ---------- */
    function drawPattern(theme, ink, accent) {
      if (curPattern === "off" || !curPattern) return;
      const base = theme === "night" ? 0.1 : 0.06;
      if (curPattern === "dots") {
        const step = 34, r = 1.1;
        for (let x = step / 2; x < w; x += step) {
          for (let y = step / 2; y < h; y += step) {
            const dx = x - mouseX, dy = y - mouseY;
            const near = Math.max(0, 1 - (dx * dx + dy * dy) / (220 * 220));
            const color = near > 0.05 ? accent : ink;
            ctx.beginPath();
            ctx.arc(x, y, r + near * 1.4, 0, Math.PI * 2);
            ctx.fillStyle = withAlpha(color, base + near * (theme === "night" ? 0.5 : 0.35));
            ctx.fill();
          }
        }
      } else if (curPattern === "grid") {
        ctx.strokeStyle = withAlpha(ink, base * 0.8);
        ctx.lineWidth = 1;
        const step = 58;
        for (let x = 0; x < w; x += step) { ctx.beginPath(); ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); ctx.stroke(); }
        for (let y = 0; y < h; y += step) { ctx.beginPath(); ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); ctx.stroke(); }
      }
    }

    function draw() {
      const { theme, ink, accent } = readVars();
      ctx.clearRect(0, 0, w, h);
      drawNebula(theme);
      drawPattern(theme, ink, accent);
    }

    /* ---------- oklch/rgb → rgba helper (cached) ---------- */
    const cache = {};
    const tmp = document.createElement("span");
    tmp.style.cssText = "position:absolute;visibility:hidden;";
    function withAlpha(colorStr, a) {
      if (cache[colorStr]) {
        const c = cache[colorStr];
        return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
      }
      tmp.style.color = colorStr;
      document.body.appendChild(tmp);
      const computed = getComputedStyle(tmp).color;
      document.body.removeChild(tmp);
      const m = computed.match(/(\d+\.?\d*)/g);
      if (!m) return `rgba(0,0,0,${a})`;
      const rgb = [parseInt(m[0]), parseInt(m[1]), parseInt(m[2])];
      cache[colorStr] = rgb;
      return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
    }

    /* ---------- On-demand render (no continuous loop) ----------
       The nebula is static when idle; we only repaint on scroll (parallax /
       hue), resize, theme change, or a tweak. This keeps the GPU quiet so the
       blurred top bar doesn't re-composite every frame and hovers stay instant. */
    let scheduled = false;
    function schedule() {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(() => { scheduled = false; draw(); });
    }

    function onMove(e) {
      // Only the dot overlay reacts to the cursor; skip redraws otherwise.
      if (curPattern !== "dots") return;
      mouseX = e.clientX; mouseY = e.clientY; schedule();
    }
    function onLeave() { if (curPattern !== "dots") return; mouseX = -9999; mouseY = -9999; schedule(); }
    function onScroll() {
      scrollPx = window.scrollY || document.documentElement.scrollTop || 0;
      const docH = Math.max(1, (document.documentElement.scrollHeight || h) - window.innerHeight);
      scrollPhase = Math.min(1, Math.max(0, scrollPx / docH));
      schedule();
    }

    window.addEventListener("resize", () => { resize(); schedule(); });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    schedule();

    return {
      setPattern(p) { curPattern = p; schedule(); },
      setIntensity(v) { curIntensity = Math.max(0, Math.min(100, +v || 0)); schedule(); },
      setPalette(p) { if (PALETTES[p]) curPalette = p; schedule(); },
      invalidate() { varsCache = null; Object.keys(cache).forEach((k) => delete cache[k]); schedule(); },
      destroy() {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("scroll", onScroll);
      },
    };
  }

  window.__bg = start;
})();
