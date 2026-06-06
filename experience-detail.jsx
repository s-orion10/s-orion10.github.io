/* Experience detail page — reads ?id=<photo> and renders one work or
   education entry. Searches both arrays so a single page serves both. */
const { Page: XPage } = window;
const XIcon = window.Icon;
const XD = window.SITE_DATA;
const { useState: xuseState, useEffect: xUseEffect } = React;

function XPhotoSlideshow({ photos, interval = 4000 }) {
  const [idx, setIdx] = xuseState(0);
  const [vis, setVis] = xuseState(true);
  xUseEffect(() => {
    if (photos.length <= 1) return;
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => { setIdx((i) => (i + 1) % photos.length); setVis(true); }, 350);
    }, interval);
    return () => clearInterval(t);
  }, [photos.length, interval]);
  return (
    <img
      src={photos[idx]}
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: vis ? 1 : 0, transition: "opacity .35s ease" }}
    />
  );
}

function xGetParam(name) {
  const m = new URLSearchParams(window.location.search).get(name);
  return m ? decodeURIComponent(m) : null;
}

function ExperienceDetail() {
  const id = xGetParam("id");
  let entry = (XD.work || []).find((e) => e.photo === id);
  let kind = "work";
  if (!entry) {
    entry = (XD.education || []).find((e) => e.photo === id);
    if (entry) kind = "education";
  }
  const backHref = kind === "education" ? "education.html" : "work.html";
  const backLabel = kind === "education" ? "Education" : "Work";
  const heroFit = entry && entry.heroFit ? entry.heroFit : "contain";

  return (
    <XPage current={kind}>
      <a className="detail-back" href={backHref}>
        <XIcon name="arrow-r" size={14} className="flip" />
        <span>{backLabel}</span>
      </a>

      {!entry ? (
        <div className="detail-missing">
          <p className="kicker">/ Not found</p>
          <h1 className="display">Entry not found.</h1>
          <p>We couldn't find that experience. Head back to the list.</p>
          <a className="cta cta--primary" href="work.html">
            <span>Back to work</span>
            <XIcon name="arrow-r" size={14} />
          </a>
        </div>
      ) : (
        <article className="proj-detail" data-screen-label="Experience">
          <header className="proj-detail__head">
            <p className="kicker">/ {entry.org}</p>
            <h1 className="proj-detail__title">{entry.title}</h1>
            <div className="proj-detail__meta">
              <span>{entry.from} — {entry.to}</span>
              {entry.role && (<><span className="proj-detail__dot" aria-hidden="true">·</span><span>{entry.role}</span></>)}
              {entry.where && (<><span className="proj-detail__dot" aria-hidden="true">·</span><span>{entry.where}</span></>)}
            </div>
          </header>

          {entry.photo && (
            <div className={"proj-detail__hero" + (heroFit === "contain" ? " proj-detail__hero--contain" : "")}>
              {entry.photos && entry.photos.length > 1 ? (
                <XPhotoSlideshow photos={entry.photos} />
              ) : (
                <image-slot
                  id={entry.photo}
                  src={entry.photoSrc || ""}
                  shape="rect"
                  fit={heroFit}
                  style={{ width: "100%", height: "100%" }}
                  placeholder={entry.slotPlaceholder || "Drop a photo"}
                ></image-slot>
              )}
            </div>
          )}

          <div className="proj-detail__grid">
            <div className="proj-detail__body">
              {entry.desc && <p className="proj-detail__lead">{entry.desc}</p>}
              {entry.details && entry.details.length > 0 && (
                <ul className="detail-list">
                  {entry.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>

            <aside className="proj-detail__aside">
              {entry.chips && entry.chips.length > 0 && (
                <div className="proj-detail__block">
                  <h2 className="proj-detail__label">Highlights</h2>
                  <div className="proj-card__tags proj-detail__tags">
                    {entry.chips.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                </div>
              )}
              {entry.link && (
                <div className="proj-detail__block">
                  <h2 className="proj-detail__label">Links</h2>
                  <div className="proj-detail__links">
                    <a className="cta cta--sm" href={entry.link.href} target="_blank" rel="noopener">
                      <span>{entry.link.label}</span>
                      <XIcon name="external" size={13} />
                    </a>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </article>
      )}
    </XPage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ExperienceDetail />);
