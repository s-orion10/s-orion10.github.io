/* ============================================================
   Shared shell — top nav (hummingbird brand), left sidebar
   (profile + socials + on-page progress), theme toggle, tweaks,
   timeline, footer. Imported by every page.
   ============================================================ */

const { useState, useEffect, useRef } = React;
const D = window.SITE_DATA;
const Icon = window.Icon;

/* ----- Theme toggle (persisted) ----- */
function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("orelli-theme") || "night"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("orelli-theme", theme);
    if (window.__bgInstance) window.__bgInstance.invalidate();
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "night" ? "day" : "night"))];
}

/* ----- Top-bar nav (page-to-page) ----- */
function TopNav({ current, theme, onTheme }) {
  const [spin, setSpin] = useState(0);
  const handleTheme = () => { setSpin((s) => s + 1); onTheme(); };
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="topbar__brand" href="index.html" aria-label="Simone Orelli — home">
          <span className="topbar__mark" aria-hidden="true">
            <img src="assets/logo.png" alt="" width="30" height="30" />
          </span>
          <span>Simone Orelli</span>
        </a>
        <nav className="topbar__nav" aria-label="Pages">
          {D.nav
            .filter((n) => n.id !== "home")
            .map((n) => (
              <a
                key={n.id}
                href={n.href}
                className={"topnav-link" + (current === n.id ? " is-active" : "")}
              >
                {n.label}
              </a>
            ))}
        </nav>
        <button
          className="theme-btn"
          onClick={handleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span
            key={spin}
            className={"theme-btn__icon" + (spin > 0 ? " is-spin" : "")}
          >
            <Icon name={theme === "night" ? "sun" : "moon"} size={16} />
          </span>
        </button>
      </div>
    </header>
  );
}

/* ----- On-page section progress (home only) ----- */
function SectionProgress({ items }) {
  const [active, setActive] = useState(items[0] && items[0].id);
  useEffect(() => {
    const els = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        let best = null;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!best || e.boundingClientRect.top < best.boundingClientRect.top) best = e;
          }
        });
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <nav className="secprog" aria-label="On this page">
      <span className="secprog__title">On this page</span>
      {items.map((it) => (
        <button
          key={it.id}
          className={"secprog__item" + (active === it.id ? " is-active" : "")}
          onClick={() => go(it.id)}
        >
          <span className="secprog__node" aria-hidden="true" />
          <span className="secprog__label">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}

/* ----- Left sidebar (profile, bio, socials, progress) ----- */
function Sidebar({ sections }) {
  return (
    <aside className="profile">
      <div className="profile__photo-wrap">
        <img
          className="profile__photo"
          src={D.identity.avatar}
          alt={D.identity.name}
          loading="lazy"
        />
      </div>
      <h2 className="profile__name">{D.identity.name}</h2>
      <p className="profile__bio">{D.identity.bioShort}</p>
      <p className="profile__tag">
        <em>"{D.identity.tagline}"</em>
      </p>

      {sections && sections.length > 0 && <SectionProgress items={sections} />}

      <ul className="profile__meta">
        <li>
          <Icon name="pin" size={14} />
          <span>{D.identity.location}</span>
        </li>
        <li>
          <Icon name="bank" size={14} />
          <span>Università "Sapienza" of Rome</span>
        </li>
      </ul>

      <div className="profile__socials">
        {D.socials.map((s) => (
          <a
            key={s.id}
            className="profile__social"
            href={s.href}
            target={s.id === "email" ? "_self" : "_blank"}
            rel="noopener"
            title={s.label}
            aria-label={s.label}
          >
            <Icon name={s.id === "email" ? "mail" : s.id} size={16} />
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

/* ----- Page footer ----- */
function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="page-footer__cell">© {new Date().getFullYear()} · Simone Orelli · Rome, Italy</div>
      <a className="federation" href="https://r-federation.eu" target="_blank" rel="noopener">
        <Icon name="globe" size={13} />
        <span>Member of R-Federation</span>
      </a>
      <div className="page-footer__cell page-footer__cell--end">
        Set in Geist &amp; Newsreader · Source on{" "}
        <a href="https://github.com/s-orion10/s-orion10.github.io" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
    </footer>
  );
}

/* ----- Tweaks (background, accent, layout, type) ----- */
const ACCENTS = {
  "#2849C7": "cobalt",
  "#A85A2A": "ember",
  "#3E7F69": "sage",
  "#7A3E8E": "plum",
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3E7F69",
  "palette": "aurora",
  "nebula": 40,
  "overlay": "off",
  "cardStyle": "minimal",
  "beyond": "grid",
  "serif": true
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const el = document.documentElement;
  el.setAttribute("data-accent", ACCENTS[t.accent] || "cobalt");
  el.setAttribute("data-palette", t.palette);
  el.setAttribute("data-bg", t.overlay);
  el.setAttribute("data-cards", t.cardStyle);
  el.setAttribute("data-beyond", t.beyond);
  el.classList.toggle("no-serif", !t.serif);
  const bg = window.__bgInstance;
  if (bg) {
    bg.setPattern(t.overlay);
    bg.setIntensity(t.nebula);
    bg.setPalette(t.palette);
    bg.invalidate();
  }
}

function TweaksApp() {
  const { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle, TweakSlider } = window;
  if (!TweaksPanel) return null;
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    if (!window.__bgInstance && window.__bg) {
      window.__bgInstance = window.__bg({
        pattern: t.overlay,
        intensity: t.nebula,
        palette: t.palette,
      });
    }
    applyTweaks(t);
  }, [t.accent, t.palette, t.nebula, t.overlay, t.cardStyle, t.beyond, t.serif]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Nebula" />
      <TweakSlider label="Intensity" value={t.nebula} min={0} max={100} step={5} unit="%" onChange={(v) => setT("nebula", v)} />
      <TweakRadio
        label="Palette"
        value={t.palette}
        options={[
          { value: "cosmic", label: "Cosmic" },
          { value: "cobalt", label: "Indigo" },
          { value: "aurora", label: "Aurora" },
        ]}
        onChange={(v) => setT("palette", v)}
      />
      <TweakRadio
        label="Overlay"
        value={t.overlay}
        options={[
          { value: "off", label: "Off" },
          { value: "dots", label: "Dots" },
          { value: "grid", label: "Grid" },
        ]}
        onChange={(v) => setT("overlay", v)}
      />
      <TweakSection label="Accent" />
      <TweakColor label="Color" value={t.accent} options={Object.keys(ACCENTS)} onChange={(v) => setT("accent", v)} />
      <TweakSection label="Layout" />
      <TweakRadio
        label="Link cards"
        value={t.cardStyle}
        options={[
          { value: "image", label: "Image" },
          { value: "minimal", label: "Minimal" },
        ]}
        onChange={(v) => setT("cardStyle", v)}
      />
      <TweakRadio
        label="Beyond"
        value={t.beyond}
        options={[
          { value: "carousel", label: "Carousel" },
          { value: "grid", label: "Grid" },
        ]}
        onChange={(v) => setT("beyond", v)}
      />
      <TweakSection label="Type" />
      <TweakToggle label="Serif accents" value={t.serif} onChange={(v) => setT("serif", v)} />
    </TweaksPanel>
  );
}

/* ----- Page shell — wraps page content with topbar + sidebar ----- */
function Page({ current, sections, children }) {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute("data-accent", ACCENTS[TWEAK_DEFAULTS.accent] || "cobalt");
    el.setAttribute("data-palette", TWEAK_DEFAULTS.palette);
    el.setAttribute("data-bg", TWEAK_DEFAULTS.overlay);
    el.setAttribute("data-cards", TWEAK_DEFAULTS.cardStyle);
    el.setAttribute("data-beyond", TWEAK_DEFAULTS.beyond);
    if (!window.__bgInstance && window.__bg) {
      window.__bgInstance = window.__bg({
        pattern: TWEAK_DEFAULTS.overlay,
        intensity: TWEAK_DEFAULTS.nebula,
        palette: TWEAK_DEFAULTS.palette,
      });
    }
  }, []);

  return (
    <>
      <TopNav current={current} theme={theme} onTheme={toggleTheme} />
      <div className="page">
        <Sidebar sections={sections} />
        <main className="page__main">{children}</main>
      </div>
      <PageFooter />
      <TweaksApp />
    </>
  );
}

/* ============================================================
   Small reusable bits shared across pages
   ============================================================ */

function SectionHead({ id, label, kicker, title, sub, action }) {
  return (
    <header className="sec-head" id={id} data-screen-label={label}>
      {kicker && <p className="kicker">{kicker}</p>}
      <div className="sec-head__row">
        <h1 className="sec-head__title">{title}</h1>
        {action}
      </div>
      {sub && <p className="sec-head__sub">{sub}</p>}
    </header>
  );
}

/* ----- Crossfade slideshow for entries with multiple photos ----- */
function PhotoSlideshow({ photos, interval = 5000, duration = 1200 }) {
  const [cur, setCur] = useState(0);
  const [next, setNext] = useState(1 % photos.length);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    if (photos.length <= 1) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCur((i) => (i + 1) % photos.length);
        setNext((i) => (i + 2) % photos.length);
        setFading(false);
      }, duration);
    }, interval);
    return () => clearInterval(t);
  }, [photos.length, interval, duration]);
  const base = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" };
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img src={photos[cur]} alt="" style={{ ...base, opacity: 1 }} />
      <img src={photos[next]} alt="" style={{ ...base, opacity: fading ? 1 : 0, transition: `opacity ${duration}ms ease` }} />
    </div>
  );
}

/* ----- Timeline entry — vertical rail + photo, links to a detail page ----- */
function TLEntry({ entry }) {
  const href = "experience.html?id=" + encodeURIComponent(entry.photo || "");
  const photos = entry.photos && entry.photos.length > 1 ? entry.photos : null;
  return (
    <article className={"tl-item" + (entry.current ? " is-current" : "")}>
      <div className="tl-rail" aria-hidden="true">
        <span className="tl-node" />
      </div>
      <a className={"tl-card" + (entry.photo ? "" : " tl-card--nomedia")} href={href}>
        {entry.photo && (
          <div className="tl-card__media">
            {photos ? (
              <PhotoSlideshow photos={photos} />
            ) : (
              <image-slot
                id={entry.photo}
                src={entry.photoSrc || ""}
                shape="rect"
                style={{ width: "100%", height: "100%" }}
                placeholder={entry.slotPlaceholder || "Drop a photo"}
              ></image-slot>
            )}
          </div>
        )}
        <div className="tl-card__content">
          <div className="tl-card__when">
            <span className="tl-card__range">{entry.from} — {entry.to}</span>
            {entry.current && <span className="tl-card__now"><span className="tl-card__now-dot" aria-hidden="true" />Now</span>}
          </div>
          <h3 className="tl-card__title">
            {entry.title}
            {entry.org && <span className="tl-card__org"> — {entry.org}</span>}
          </h3>
          {(entry.role || entry.where) && (
            <div className="tl-card__meta">
              {entry.role && <span>{entry.role}</span>}
              {entry.where && <span>{entry.where}</span>}
            </div>
          )}
          {entry.desc && <p className="tl-card__desc">{entry.desc}</p>}
          {entry.chips && (
            <div className="chips tl-card__chips">
              {entry.chips.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          )}
          <span className="tl-card__cta">
            <span>View details</span>
            <Icon name="arrow-r" size={13} />
          </span>
        </div>
      </a>
    </article>
  );
}

/* Export to window so per-page scripts can use them */
Object.assign(window, {
  Page,
  Sidebar,
  TopNav,
  SectionHead,
  TLEntry,
  SectionProgress,
  TweaksApp,
  TWEAK_DEFAULTS,
  D,
});
