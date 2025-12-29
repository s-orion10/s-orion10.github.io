---
layout: archive
title: ""
permalink: /education/
author_profile: true
redirect_from:
  - /resume
  - /cv/
entries:
  - title: "Ph.D. in Automatic Control, Bioengineering and Operations"
    institution: "Sapienza University of Rome"
    location: "Rome, Italy"
    period: "Nov 2021 - Present"
    summary: "Doctoral research on autonomous systems and advanced control architectures, blending theoretical analysis with experimental platforms in robotics and bioengineering."
    tags:
      - "Doctorate"
      - "Control Systems"
    media_link: "https://www.uniroma1.it/it/"
    image: "/images/sapienza.png"
    image_alt: "Illustration for doctoral research"
  - title: "M.Eng equivalent in Control Engineering"
    institution: "Sapienza University of Rome"
    location: "Rome, Italy"
    period: "Completed Oct 2021"
    summary: "Advanced coursework and laboratory projects in robust and nonlinear control, culminating in an average exam grade of 29.13/30 and applied research across aerospace and robotics domains."
    tags:
      - "Master's Degree"
      - "Control Engineering"
    media_link: "https://www.uniroma1.it/it/"
    image: "/images/sapienza.png"
    image_alt: "Illustration for control engineering master's studies"
  - title: "B.Eng equivalent in Information Engineering, Informatics and Statistics"
    institution: "Sapienza University of Rome (Latina campus)"
    location: "Latina, Italy"
    period: "Sep 2016 - Oct 2021"
    summary: "Integrated curriculum covering automation, computer science, and applied statistics; graduated with final grade 110/110 with honors while delivering capstone projects in embedded systems."
    tags:
      - "Bachelor's Degree"
      - "Information Engineering"
    media_link: "https://www.uniroma1.it/it/"
    image: "/images/sapienza.png"
    image_alt: "Illustration for information engineering bachelor's studies"
  - title: "Technical Institute Diploma in Business Information Systems"
    institution: "ISIS Pacifici & De Magistris"
    location: "Sezze (LT), Italy"
    period: "Sep 2011 - Jul 2016"
    summary: "Specialised studies in enterprise information systems, accounting, and applied computer science, completed with final grade 100/100 and internships across local organisations."
    tags:
      - "High School Diploma"
      - "Business IT"
    media_link: "https://istitutosuperioresezze.edu.it/scuola/"
    image: "/images/ISIS_Pacifici_e_DeMagistris.png"
    image_alt: "Illustration for business information systems diploma"
---

{% include base_path %}

<style>
:root {
  --education-panel-bg: rgba(248, 249, 252, 0.98);
  --education-panel-border: rgba(15, 23, 42, 0.08);
  --education-panel-shadow: 0 16px 42px rgba(15, 23, 42, 0.12);
  --education-card-bg: rgba(255, 255, 255, 0.97);
  --education-card-border: rgba(148, 163, 184, 0.24);
  --education-card-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
  --education-card-hover-border: rgba(14, 116, 144, 0.38);
  --education-card-hover-shadow: 0 22px 50px rgba(15, 23, 42, 0.16);
  --education-text-color: #1f2937;
  --education-link-color: #0f766e;
  --timeline-line-color: rgba(14, 116, 144, 0.22);
  --timeline-dot-color: #0f766e;
  --timeline-dot-halo: rgba(14, 116, 144, 0.18);
  --timeline-marker-width: 48px;
  --timeline-gap: 2.6rem;
}

html[data-theme="dark"] {
  --education-panel-bg: rgba(39, 48, 56, 0.96);
  --education-panel-border: rgba(191, 219, 254, 0.22);
  --education-panel-shadow: 0 12px 34px rgba(15, 23, 42, 0.45);
  --education-card-bg: rgba(52, 63, 72, 0.94);
  --education-card-border: rgba(148, 163, 184, 0.34);
  --education-card-shadow: 0 18px 40px rgba(15, 23, 42, 0.42);
  --education-card-hover-border: rgba(45, 212, 191, 0.55);
  --education-card-hover-shadow: 0 24px 56px rgba(15, 23, 42, 0.5);
  --education-text-color: #e2e8f0;
  --education-link-color: #5eead4;
  --timeline-line-color: rgba(94, 234, 212, 0.38);
  --timeline-dot-color: #5eead4;
  --timeline-dot-halo: rgba(94, 234, 212, 0.26);
}

.education-section {
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin: 0;
}

.education-panel {
  margin: 0;
  padding: 2.6rem 2.4rem;
  border: 1px solid var(--education-panel-border);
  border-radius: 26px;
  background: var(--education-panel-bg);
  box-shadow: var(--education-panel-shadow);
  width: 100%;
  max-width: none;
  align-self: stretch;
}

.education-header {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.education-heading {
  margin: 0;
  font-size: clamp(2.1rem, 2vw + 1.2rem, 2.6rem);
  font-weight: 700;
  letter-spacing: 0.01em;
}

.education-intro {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.4rem;
  align-items: center;
  color: var(--education-text-color);
}

.education-intro p {
  margin: 0;
  line-height: 1.65;
  max-width: 42rem;
}

.education-cv-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.35rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid rgba(14, 116, 144, 0.32);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.16), rgba(45, 212, 191, 0.2));
  color: var(--education-link-color);
  text-decoration: none !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  overflow: hidden;
}

.education-cv-link::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at top left, rgba(94, 234, 212, 0.35), transparent 55%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.education-cv-link::after {
  content: "→";
  font-size: 1.05rem;
  transition: transform 0.25s ease;
}

.education-cv-link:hover,
.education-cv-link:focus-visible {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 28px rgba(13, 148, 136, 0.28);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.26), rgba(45, 212, 191, 0.32));
  border-color: rgba(13, 148, 136, 0.6);
  color: #0f766e;
}

.education-cv-link:hover::before,
.education-cv-link:focus-visible::before {
  opacity: 1;
}

.education-cv-link:hover::after,
.education-cv-link:focus-visible::after {
  transform: translateX(5px);
}

.education-cv-link:focus-visible {
  outline: 3px solid rgba(45, 212, 191, 0.4);
  outline-offset: 3px;
}

.education-timeline {
  position: relative;
  margin-top: 2.8rem;
}

.education-timeline::before {
  content: "";
  position: absolute;
  top: 0.6rem;
  bottom: 0.6rem;
  left: calc(var(--timeline-marker-width) + 0.3rem);
  width: 3px;
  border-radius: 999px;
  background: var(--timeline-line-color);
}

.education-entry {
  position: relative;
  margin-bottom: var(--timeline-gap);
  padding-left: calc(var(--timeline-marker-width) + 2.1rem);
}

.education-entry:last-child {
  margin-bottom: 0;
}

.education-marker {
  position: absolute;
  top: 1.8rem;
  left: 0;
  width: calc(var(--timeline-marker-width) + 0.86rem);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.education-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--timeline-dot-color);
  box-shadow: 0 0 0 6px var(--timeline-dot-halo);
}

.education-card {
  display: grid;
  grid-template-columns: minmax(150px, 240px) minmax(0, 1fr);
  grid-template-areas:
    "title title"
    "media info"
    "summary summary"
    "actions actions";
  column-gap: 1.9rem;
  row-gap: 1.35rem;
  padding: 2rem 2.2rem;
  border-radius: 24px;
  border: 1px solid var(--education-card-border);
  background: var(--education-card-bg);
  box-shadow: var(--education-card-shadow);
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
  align-items: start;
}

.education-card:hover,
.education-card:focus-within {
  border-color: var(--education-card-hover-border);
  box-shadow: var(--education-card-hover-shadow);
  transform: translateY(-4px);
}

.education-card-title {
  grid-area: title;
  margin: 0;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.22;
  padding-bottom: 0.75rem;
  margin-bottom: 0.85rem;
  border-bottom: 1px solid rgba(14, 116, 144, 0.22);
}

html[data-theme="dark"] .education-card-title {
  border-bottom-color: rgba(94, 234, 212, 0.3);
}


.education-card-media {
  grid-area: media;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 4 / 3;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(148, 163, 184, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.education-card-media:hover,
.education-card-media:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(14, 116, 144, 0.22);
}

.education-card-media:focus-visible {
  outline: 3px solid rgba(45, 212, 191, 0.4);
  outline-offset: 3px;
}

.education-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.education-card-info {
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  align-self: stretch;
  justify-content: center;
}

.education-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.education-card-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(14, 116, 144, 0.16);
  color: rgba(15, 118, 110, 0.9);
  width: fit-content;
}

html[data-theme="dark"] .education-card-tag {
  background: rgba(94, 234, 212, 0.24);
  color: rgba(226, 232, 240, 0.88);
}

.education-card-meta {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(71, 85, 105, 0.95);
}

html[data-theme="dark"] .education-card-meta {
  color: rgba(226, 232, 240, 0.72);
}

.education-card-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.education-card-meta span + span::before {
  content: "•";
  font-size: 0.7rem;
  color: rgba(100, 116, 139, 0.8);
}

html[data-theme="dark"] .education-card-meta span + span::before {
  color: rgba(148, 197, 255, 0.55);
}

.education-card-summary {
  grid-area: summary;
  margin: 0;
  line-height: 1.62;
  color: var(--education-text-color);
}

html[data-theme="dark"] .education-card-summary {
  color: rgba(226, 232, 240, 0.88);
}

.education-card-actions {
  grid-area: actions;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.9rem;
  justify-content: space-between;
  align-items: center;
  align-self: end;
  width: 100%;
  padding-top: 0.2rem;
}

.education-card-period {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.68);
  background: rgba(148, 163, 184, 0.16);
  white-space: nowrap;
}

html[data-theme="dark"] .education-card-period {
  color: rgba(226, 232, 240, 0.82);
  background: rgba(94, 234, 212, 0.22);
}

@media (max-width: 1100px) {
  :root {
    --timeline-marker-width: 40px;
    --timeline-gap: 2.3rem;
  }
}

@media (max-width: 900px) {
  .education-card {
    grid-template-columns: minmax(140px, 180px) minmax(0, 1fr);
    column-gap: 1.6rem;
    row-gap: 1.2rem;
    padding: 1.8rem;
  }

  .education-card-media {
    max-width: 180px;
  }
}

@media (max-width: 720px) {
  :root {
    --timeline-marker-width: 36px;
    --timeline-gap: 2rem;
  }

  .education-panel {
    padding: 2.1rem 1.8rem;
  }

  .education-card {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "media"
      "info"
      "summary"
      "actions";
    row-gap: 1.2rem;
  }

  .education-card-media {
    width: 100%;
    max-width: none;
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 580px) {
  .education-timeline::before {
    display: none;
  }

  .education-entry {
    padding-left: 0;
  }

  .education-marker {
    position: relative;
    top: 0;
    width: 100%;
    justify-content: flex-start;
  }

  .education-dot {
    box-shadow: 0 0 0 4px var(--timeline-dot-halo);
  }

  .education-card {
    width: 100%;
    padding: 1.6rem 1.5rem;
    row-gap: 1rem;
  }
}
</style>

<div class="education-section">
  <div class="education-panel">
    <div class="education-header">
      <h1 class="education-heading">Education</h1>
      <div class="education-intro">
        <p>Formal academic path spanning doctoral research, advanced control engineering, and information technology foundations.</p>
        <a class="education-cv-link" href="https://s-orion10.github.io/files/curriculum.pdf" target="_blank" rel="noopener">Download full CV</a>
      </div>
    </div>

    <div class="education-timeline" role="list">
      {% assign education_entries = page.entries | default: empty %}
      {% for entry in education_entries %}
        {% assign period_label = entry.period
          | replace: 'January', 'Jan'
          | replace: 'February', 'Feb'
          | replace: 'March', 'Mar'
          | replace: 'April', 'Apr'
          | replace: 'June', 'Jun'
          | replace: 'July', 'Jul'
          | replace: 'August', 'Aug'
          | replace: 'September', 'Sep'
          | replace: 'October', 'Oct'
          | replace: 'November', 'Nov'
          | replace: 'December', 'Dec' %}
        <article class="education-entry" role="listitem">
          <div class="education-marker">
            <span class="education-dot" aria-hidden="true"></span>
          </div>
          <div class="education-card">
            {% assign tag_items = entry.tags %}
            {% if tag_items == nil or tag_items == empty %}
              {% assign type_string = entry.type | to_s %}
              {% assign tag_items = type_string | split: ' - ' %}
            {% endif %}
            {% capture tag_markup %}
              {% for tag in tag_items %}
                {% assign tag_label = tag | strip %}
                {% if tag_label != '' %}<span class="education-card-tag">{{ tag_label }}</span>{% endif %}
              {% endfor %}
            {% endcapture %}
            {% assign has_tags = tag_markup contains 'education-card-tag' %}
            {% assign media_link = entry.media_link %}
            {% assign card_image = entry.image | default: '/images/education-default.svg' %}
            {% assign image_alt = entry.image_alt | default: entry.title %}
            <h2 class="education-card-title">{{ entry.title }}</h2>
            {% if media_link %}
              <a class="education-card-media" href="{{ media_link }}" target="_blank" rel="noopener">
                <img src="{{ card_image | relative_url }}" alt="{{ image_alt }}">
              </a>
            {% else %}
              <div class="education-card-media" aria-hidden="true">
                <img src="{{ card_image | relative_url }}" alt="{{ image_alt }}">
              </div>
            {% endif %}
            <div class="education-card-info">
              {% if has_tags %}
                <div class="education-card-tags">{{ tag_markup | strip_newlines }}</div>
              {% endif %}
              {% if entry.institution or entry.location %}
                <p class="education-card-meta">
                  {% if entry.institution %}<span>{{ entry.institution }}</span>{% endif %}
                  {% if entry.location %}<span>{{ entry.location }}</span>{% endif %}
                </p>
              {% endif %}
            </div>
            <p class="education-card-summary">{% if entry.summary %}{{ entry.summary }}{% endif %}</p>
            <div class="education-card-actions">
              {% if period_label %}<span class="education-card-period">{{ period_label }}</span>{% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</div>


  
