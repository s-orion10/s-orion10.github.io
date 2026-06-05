/* Publications page — placeholder, to be filled in later */
const { Page: PubPage, SectionHead: PubHead, D: PubD } = window;
const PubIcon = window.Icon;

function PublicationsPage() {
  const pub = PubD.publications || { intro: "", items: [] };
  return (
    <PubPage current="publications">
      <PubHead
        kicker="/ Publications"
        title={<>Papers, theses &amp; <em>preprints</em>.</>}
        sub={pub.intro}
      />
      {(!pub.items || pub.items.length === 0) ? (
        <div className="empty-state">
          <span className="empty-state__icon">
            <PubIcon name="book" size={26} />
          </span>
          <h3 className="empty-state__title">Taking shape</h3>
          <p className="empty-state__text">
            This section is intentionally empty for now. Publications, theses and preprints
            will be collected here — we'll fill it in together.
          </p>
          <a className="cta cta--ghost" href="https://orcid.org/0009-0007-6613-8597" target="_blank" rel="noopener">
            <PubIcon name="orcid" size={14} />
            <span>ORCID profile</span>
          </a>
        </div>
      ) : null}
    </PubPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PublicationsPage />);
