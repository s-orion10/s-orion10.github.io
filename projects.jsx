/* Projects page */
const { Page: PPage, SectionHead: PSectionHead, D: PD } = window;
const PIcon = window.Icon;

function ProjectCard({ p }) {
  return (
    <article className="proj-card">
      <div className="proj-card__visual">
        <image-slot
          id={p.photo}
          shape="rect"
          style={{ width: "100%", height: "100%" }}
          placeholder={p.slotPlaceholder || "Drop a project image"}
        ></image-slot>
      </div>
      <div className="proj-card__body">
        <div className="proj-card__year">{p.year} · {p.org}</div>
        <h3 className="proj-card__title">{p.title}</h3>
        <p className="proj-card__desc">{p.desc}</p>
        <div className="proj-card__tags">
          {p.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        {p.links && p.links.length > 0 && (
          <div className="proj-card__links">
            {p.links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener" className="linkout">
                <span>{l.label}</span>
                <PIcon name="external" size={12} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectsPage() {
  return (
    <PPage current="projects">
      <PSectionHead
        kicker="/ Projects"
        title={<>Builds where <em>theory</em> met hardware.</>}
        sub="Selected projects spanning control, robotics, and autonomy — each pairing rigorous design with hands-on validation."
      />
      <div className="proj-grid">
        {PD.projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </PPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectsPage />);
