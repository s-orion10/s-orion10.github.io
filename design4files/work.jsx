/* Work Experiences page */
const { Page: WPage, SectionHead: WSectionHead, TLEntry: WTLEntry, D: WD } = window;

function WorkPage() {
  return (
    <WPage current="work">
      <WSectionHead
        kicker="/ Work Experiences"
        title={<>Work <em>experiences</em>.</>}
        sub="A look at the most meaningful stages of my journey so far — research, engineering, teaching, and a year of civil service. Listed most recent first."
      />
      <div className="timeline">
        {WD.work.map((e, i) => (
          <WTLEntry key={i} entry={e} defaultOpen={!!e.current} />
        ))}
      </div>
    </WPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WorkPage />);
