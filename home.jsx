/* Home page — About + link cards + Toolkit + Beyond engineering + Contact */
const { Page, SectionHead, D: HD } = window;
const HIcon = window.Icon;
const { useRef: useHRef, useState: useHState } = React;

const HOME_SECTIONS = [
  { id: "about", label: "About" },
  { id: "toolkit", label: "Toolkit" },
  { id: "beyond", label: "Beyond engineering" },
  { id: "contact", label: "Get in touch" },
];

function Hero() {
  return (
    <section className="hero" id="about" data-screen-label="01 About">
      <p className="kicker">/ About</p>
      <h1 className="display">
        About <em>me</em>.
      </h1>
      <div className="hero__body">
        {HD.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function PageCards() {
  return (
    <section className="section section--flush" data-screen-label="02 Sections">
      <ul className="card-grid">
        {HD.pageCards.map((c, i) => (
          <li key={c.id} className="card-cell" data-span={i < 3 ? "third" : "half"}>
            <div className="big-card">
              <div className="big-card__media">
                <image-slot
                  id={c.photo}
                  shape="rect"
                  style={{ width: "100%", height: "100%" }}
                  placeholder={c.slotPlaceholder || "Drop a photo"}
                ></image-slot>
              </div>
              <span className="big-card__scrim" aria-hidden="true"></span>
              <a className="big-card__body" href={c.href}>
                <span className="big-card__num">→ {c.id.toUpperCase()}</span>
                <span className="big-card__fill"></span>
                <h2 className="big-card__title">{c.title}</h2>
                <p className="big-card__desc">{c.desc}</p>
                <span className="big-card__cta">
                  <span>Open</span>
                  <HIcon name="arrow-r" size={12} />
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="toolkit" data-screen-label="03 Toolkit">
      <SectionHead
        kicker="/ Toolkit"
        title={<>Skills, by <em>domain</em>.</>}
        sub="Less an exhaustive list, more a map of where I spend my time — from control design and embedded code all the way to mechanical parts that hold the electronics."
      />
      <div className="skill-groups">
        {HD.skills.map((g) => (
          <div key={g.label} className="skill-group">
            <header>
              <div className="skill-group__top">
                <span className="skill-group__label">{g.label}</span>
                <span className="skill-group__count">{g.items.length} skills</span>
              </div>
              <h3>{g.title}</h3>
              <p>{g.blurb}</p>
            </header>
            <div className="skill-group__divider"></div>
            <div className="skill-cloud">
              {g.items.map((s) => (
                <span key={s.name} className="skill-chip" data-lvl={s.lvl}>
                  <span className="skill-chip__name">{s.name}</span>
                  {s.hint && <span className="skill-chip__tag">{s.hint}</span>}
                  <span className="skill-chip__lvl" aria-label={"level " + s.lvl + " of 3"}>
                    <i className={s.lvl >= 1 ? "on" : ""} />
                    <i className={s.lvl >= 2 ? "on" : ""} />
                    <i className={s.lvl >= 3 ? "on" : ""} />
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeyondCard({ b }) {
  const Tag = b.href ? "a" : "div";
  const tagProps = b.href ? { href: b.href, target: "_blank", rel: "noopener" } : {};
  return (
    <Tag
      className={"beyond-card" + (b.href ? " is-link" : "")}
      {...tagProps}
    >
      <span className="beyond-card__icon">
        <HIcon name={b.icon} size={22} />
      </span>
      <div className="beyond-card__txt">
        <h3 className="beyond-card__h">{b.h}</h3>
        <p className="beyond-card__p">{b.p}</p>
      </div>
      {b.href && (
        <span className="beyond-card__out">
          <HIcon name="external" size={13} />
        </span>
      )}
    </Tag>
  );
}

function Beyond() {
  const trackRef = useHRef(null);
  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".beyond-card");
    const step = card ? card.offsetWidth + 18 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  return (
    <section className="section" id="beyond" data-screen-label="04 Beyond">
      <div className="beyond-head">
        <SectionHead
          kicker="/ Beyond engineering"
          title={<>Off the <em>oscilloscope</em>.</>}
          sub="The hobbies that keep me balanced, sharpen strategic thinking, and sustain the creativity I bring back to engineering."
        />
        <div className="beyond-nav" aria-hidden="false">
          <button className="beyond-arrow" onClick={() => scrollBy(-1)} aria-label="Previous">
            <HIcon name="arrow-r" size={16} className="flip" />
          </button>
          <button className="beyond-arrow" onClick={() => scrollBy(1)} aria-label="Next">
            <HIcon name="arrow-r" size={16} />
          </button>
        </div>
      </div>
      <div className="beyond" ref={trackRef}>
        {HD.beyond.map((b, i) => (
          <BeyondCard key={i} b={b} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" data-screen-label="05 Contact">
      <SectionHead
        kicker="/ Get in touch"
        title={<>Let's <em>connect</em>.</>}
        sub="Always open to new collaborations, research projects, or a friendly chat about control theory, robotics, or the latest chess opening."
      />
      <div className="contact__row">
        <a className="cta cta--primary" href="mailto:schol@r-orelli.eu">
          <span>schol@r-orelli.eu</span>
          <HIcon name="arrow" size={14} />
        </a>
        <a
          className="cta"
          href="https://www.linkedin.com/in/simone-orelli-a5b9a1144"
          target="_blank"
          rel="noopener"
        >
          <span>Message on LinkedIn</span>
          <HIcon name="external" size={12} />
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <Page current="home" sections={HOME_SECTIONS}>
      <Hero />
      <PageCards />
      <Skills />
      <Beyond />
      <Contact />
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
