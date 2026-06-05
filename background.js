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

    /* The flowing aurora is now pure CSS (GPU-composited transforms) so it
       never touches the main thread. We inject its layer once and only drive
       its opacity from the intensity tweak; colours come from [data-palette]
       via stylesheet. The canvas below is used ONLY for the optional, static
       dots/grid overlay. */
    function setAuroraOpacity(v) {
      const o = Math.max(0, Math.min(1, (v / 100) * 1.0));
      document.documentElement.style.setProperty("--aurora-opacity", o.toFixed(3));
    }
    (function injectAurora() {
      if (document.querySelector(".aurora")) return;
      const layer = document.createElement("div");
      layer.className = "aurora";
      layer.setAttribute("aria-hidden", "true");
      layer.innerHTML =
        '<div class="aurora__blob aurora__blob--1"></div>' +
        '<div class="aurora__blob aurora__blob--2"></div>' +
        '<div class="aurora__blob aurora__blob--3"></div>' +
        '<div class="aurora__blob aurora__blob--4"></div>';
      document.body.insertBefore(layer, document.body.firstChild);
    })();
    setAuroraOpacity(curIntensity);

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
      // Nebula is now CSS (.aurora). Canvas only paints the optional overlay.
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

    /* ---------- Render scheduling ----------
       The flowing aurora is CSS, so nothing animates on the canvas. We only
       repaint the (static) dots/grid overlay on demand: resize, theme change,
       or a tweak. No continuous loop → the main thread stays free and hovers
       stay instant. */
    let scheduled = false;
    function schedule() {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(() => { scheduled = false; draw(); });
    }

    window.addEventListener("resize", () => { resize(); schedule(); });
    schedule();

    /* Scroll-driven hue shift on the CSS aurora. We only write one custom
       property (--scroll-hue) that feeds a GPU `hue-rotate` filter — no canvas
       repaint, no layout — so it stays light. rAF-coalesced. */
    let hueQueued = false;
    function onScrollHue() {
      if (hueQueued) return;
      hueQueued = true;
      requestAnimationFrame(() => {
        hueQueued = false;
        const top = window.scrollY || document.documentElement.scrollTop || 0;
        const docH = Math.max(1, (document.documentElement.scrollHeight || h) - window.innerHeight);
        const phase = Math.min(1, Math.max(0, top / docH));
        document.documentElement.style.setProperty("--scroll-hue", (phase * 90).toFixed(1) + "deg");
      });
    }
    window.addEventListener("scroll", onScrollHue, { passive: true });
    onScrollHue();

    return {
      setPattern(p) { curPattern = p; schedule(); },
      setIntensity(v) { curIntensity = Math.max(0, Math.min(100, +v || 0)); setAuroraOpacity(curIntensity); schedule(); },
      setPalette(p) { if (PALETTES[p]) curPalette = p; schedule(); },
      invalidate() { varsCache = null; Object.keys(cache).forEach((k) => delete cache[k]); schedule(); },
      destroy() {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
      },
    };
  }

  window.__bg = start;
})();
