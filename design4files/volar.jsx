/* Volar Robotics page — placeholder, to be filled in later */
const { Page: VPage, SectionHead: VHead, D: VD } = window;
const VIcon = window.Icon;

function VolarPage() {
  const v = VD.volar || { intro: "" };
  return (
    <VPage current="volar">
      <VHead
        kicker="/ Volar Robotics"
        title={<>Volar <em>Robotics</em>.</>}
        sub={v.intro}
      />
      <div className="empty-state empty-state--feature">
        <span className="empty-state__icon">
          <VIcon name="drone" size={28} />
        </span>
        <h3 className="empty-state__title">Coming soon</h3>
        <p className="empty-state__text">
          A venture in aerial manipulation and autonomy, currently being defined.
          The story, the team and the work will land here — we'll customise this page next.
        </p>
        <div className="empty-state__slot">
          <image-slot
            id="volar-hero"
            shape="rounded"
            radius="18"
            style={{ width: "100%", height: "100%" }}
            placeholder="Drop a Volar Robotics image (logo, render, team photo)"
          ></image-slot>
        </div>
      </div>
    </VPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<VolarPage />);
