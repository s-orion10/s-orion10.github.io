/* Education page */
const { Page: EPage, SectionHead: ESectionHead, TLEntry: ETLEntry, D: ED } = window;
const EIcon = window.Icon;

function EducationPage() {
  return (
    <EPage current="education">
      <ESectionHead
        kicker="/ Education"
        title={<>Where the <em>foundations</em> were laid.</>}
        sub="Formal academic path spanning doctoral research, control engineering, an undergraduate degree in information engineering at the Sapienza Latina campus, and a technical-institute diploma in Sezze."
        action={
          <a
            className="cta cta--ghost"
            href="https://s-orion10.github.io/files/curriculum.pdf"
            target="_blank"
            rel="noopener"
          >
            <EIcon name="download" size={14} />
            <span>Download full CV</span>
          </a>
        }
      />
      <div className="timeline">
        {ED.education.map((e, i) => (
          <ETLEntry key={i} entry={e} defaultOpen={!!e.current} />
        ))}
      </div>
    </EPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EducationPage />);
