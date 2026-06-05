/* Projects page */
const { Page: PPage, SectionHead: PSectionHead, D: PD } = window;
const PIcon = window.Icon;
const { useState: usePState } = React;

const PROJ_FILTERS = [
  { id: "all", label: "All" },
  { id: "academic", label: "Academic projects" },
  { id: "thesis", label: "Theses" },
];

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
          {p.tags.slice(0, 4).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div className="proj-card__links">
          <a className="cta cta--sm proj-card__open" href={"project.html?p=" + encodeURIComponent(p.photo)}>
            <span>Open project</span>
            <PIcon name="arrow-r" size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = usePState("all");
  const counts = {
    all: PD.projects.length,
    academic: PD.projects.filter((p) => p.category === "academic").length,
    thesis: PD.projects.filter((p) => p.category === "thesis").length,
  };
  const shown = filter === "all"
    ? PD.projects
    : PD.projects.filter((p) => p.category === filter);

  return (
    <PPage current="projects">
      <PSectionHead
        kicker="/ Projects"
        title={<>Builds where <em>theory</em> met hardware.</>}
        sub="Selected projects spanning control, robotics, and autonomy — each pairing rigorous design with hands-on validation."
      />
      <div className="proj-filter" role="tablist" aria-label="Filter projects">
        {PROJ_FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={"proj-filter__btn" + (filter === f.id ? " is-active" : "")}
            onClick={() => setFilter(f.id)}
          >
            <span>{f.label}</span>
            <span className="proj-filter__count">{counts[f.id]}</span>
          </button>
        ))}
      </div>
      <div className="proj-grid">
        {shown.map((p) => (
          <ProjectCard key={p.photo} p={p} />
        ))}
      </div>
    </PPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectsPage />);
