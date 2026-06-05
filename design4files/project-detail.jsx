/* Project detail page — reads ?p=<photo-id> and renders one project. */
const { Page: DPage } = window;
const DIcon = window.Icon;
const DD = window.SITE_DATA;

function getParam(name) {
  const m = new URLSearchParams(window.location.search).get(name);
  return m ? decodeURIComponent(m) : null;
}

function ProjectDetail() {
  const slug = getParam("p");
  const proj = DD.projects.find((p) => p.photo === slug) || null;

  return (
    <DPage current="projects">
      <a className="detail-back" href="projects.html">
        <DIcon name="arrow-r" size={14} className="flip" />
        <span>All projects</span>
      </a>

      {!proj ? (
        <div className="detail-missing">
          <p className="kicker">/ Not found</p>
          <h1 className="display">Project not found.</h1>
          <p>We couldn't find that project. Head back to the full list.</p>
          <a className="cta cta--primary" href="projects.html">
            <span>Browse projects</span>
            <DIcon name="arrow-r" size={14} />
          </a>
        </div>
      ) : (
        <article className="proj-detail" data-screen-label="Project">
          <header className="proj-detail__head">
            <p className="kicker">/ {proj.org}</p>
            <h1 className="proj-detail__title">{proj.title}</h1>
            <div className="proj-detail__meta">
              <span>{proj.year}</span>
              <span className="proj-detail__dot" aria-hidden="true">·</span>
              <span>{proj.org}</span>
            </div>
          </header>

          <div className="proj-detail__hero">
            <image-slot
              id={proj.photo}
              shape="rect"
              style={{ width: "100%", height: "100%" }}
              placeholder={proj.slotPlaceholder || "Drop a project image"}
            ></image-slot>
          </div>

          <div className="proj-detail__grid">
            <div className="proj-detail__body">
              <p className="proj-detail__lead">{proj.desc}</p>
            </div>

            <aside className="proj-detail__aside">
              {proj.tags && proj.tags.length > 0 && (
                <div className="proj-detail__block">
                  <h2 className="proj-detail__label">Focus</h2>
                  <div className="proj-card__tags proj-detail__tags">
                    {proj.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              {proj.links && proj.links.length > 0 && (
                <div className="proj-detail__block">
                  <h2 className="proj-detail__label">Resources</h2>
                  <div className="proj-detail__links">
                    {proj.links.map((l, i) => (
                      <a
                        key={i}
                        className="cta cta--sm"
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                      >
                        <span>{l.label}</span>
                        <DIcon name="external" size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </article>
      )}
    </DPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectDetail />);
