---
permalink: /
title: "Control Systems Engineer & Robotics Enthusiast"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.skill-panel-list { display: flex; flex-direction: column; gap: 1rem; }
.skill-highlight { display: flex; align-items: center; gap: 1.25rem; width: 100%; padding: 1.2rem 1.1rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 16px; background: rgba(255, 255, 255, 0.96); color: inherit; text-decoration: none !important; box-shadow: 0 3px 9px rgba(15, 23, 42, 0.05); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
.skill-highlight:hover, .skill-highlight:focus-visible { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12); border-color: rgba(0, 118, 168, 0.28); }
.skill-highlight:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.skill-highlight-icon { font-size: 1.9rem; }
.skill-highlight-copy { display: flex; flex-direction: column; gap: 0.4rem; text-align: left; }
.skill-highlight-title { margin: 0; font-size: 1.08rem; font-weight: 600; }
.skill-highlight-desc { margin: 0; line-height: 1.55; color: #1f2933; }
.about-section { margin: 0; }
.about-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.about-card { display: flex; flex-direction: column; gap: 0.65rem; padding: 1.25rem 1.1rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 18px; background: rgba(248, 250, 252, 0.96); box-shadow: 0 3px 9px rgba(15, 23, 42, 0.05); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; color: inherit; text-decoration: none !important; }
.about-card:hover, .about-card:focus-visible { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12); border-color: rgba(0, 118, 168, 0.28); }
.about-card:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.about-icon { font-size: 2rem; }
.about-title { font-weight: 600; font-size: 1.08rem; margin: 0; }
.about-desc { margin: 0; line-height: 1.55; }
.section-panel { margin: 3rem 0; display: flex; flex-direction: column; gap: 1.6rem; padding: 1.6rem 1.35rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 22px; background: rgba(248, 250, 252, 0.98); box-shadow: 0 3px 12px rgba(15, 23, 42, 0.08); }
.section-panel:first-of-type { margin-top: 0; }
.section-panel p { margin: 0; line-height: 1.6; }
.section-panel p + p { margin-top: 0.9rem; }
.section-heading { margin: 0; font-size: 1.32rem; font-weight: 700; letter-spacing: 0.01em; }
.section-body { display: flex; flex-direction: column; gap: 2.4rem; }
.life-section { margin: 3rem 0; }
.life-section .section-panel { margin: 0; }
.life-heading { margin: 0; font-size: 1.32rem; font-weight: 700; letter-spacing: 0.01em; }
.life-list { display: flex; flex-direction: column; gap: 1rem; }
.life-item { display: flex; flex-direction: column; gap: 0.7rem; padding: 1.15rem 1.05rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 16px; background: rgba(255, 255, 255, 0.96); box-shadow: 0 3px 9px rgba(15, 23, 42, 0.05); color: inherit; text-decoration: none !important; transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
.life-item:hover, .life-item:focus-within { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12); border-color: rgba(0, 118, 168, 0.28); text-decoration: none !important; }
.life-item:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.life-icon { font-size: 1.9rem; }
.life-title { font-weight: 600; font-size: 1.05rem; margin: 0; }
.life-desc { margin: 0; line-height: 1.55; }
.life-note { margin: 0; line-height: 1.6; color: #1f2933; }
.contact-panel { position: relative; }
.contact-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
.contact-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.55rem 1.1rem; border-radius: 999px; font-weight: 600; text-decoration: none; border: 1px solid rgba(148, 163, 184, 0.45); background: rgba(148, 163, 184, 0.18); color: #475569; box-shadow: 0 3px 9px rgba(15, 23, 42, 0.08); transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease; }
.contact-button:hover, .contact-button:focus-visible { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(15, 23, 42, 0.16); background: rgba(148, 163, 184, 0.26); border-color: rgba(148, 163, 184, 0.6); color: #1f2937; outline: none; }
.contact-button:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.contact-button--mail:hover, .contact-button--mail:focus-visible { background: rgba(16, 185, 129, 0.16); border-color: rgba(16, 185, 129, 0.55); color: #065f46; }
.contact-button--linkedin:hover, .contact-button--linkedin:focus-visible { background: rgba(14, 118, 168, 0.18); border-color: rgba(14, 118, 168, 0.6); color: #0b4870; }
</style>

<div class="section-panel">
  <h1 class="section-heading">About Me</h1>
  <div class="section-body">
    <p>I’m Simone Orelli, a <strong>28-year-old control systems engineer</strong> who thrives where robotics, applied mathematics, and software craftsmanship meet. I love translating complex dynamics into controllers that let airframes, ground robots, and embedded platforms move with confidence in the real world.</p>
    <p>Right now I’m focused on <strong>nonlinear control of under-actuated rigid bodies</strong> with tightly coupled moment–force dynamics, blending geometric methods with state estimation, guidance, and embedded implementation.</p>
    <p>My workflow is research-first: I dive into theory, build high-fidelity prototypes in MATLAB/Simulink, and iterate until the hardware response matches the mathematical intent.</p>
    <div class="about-section">
      <div class="about-grid">
        <a class="about-card" href="{{ '/projects/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">🛩️</span>
          <h3 class="about-title">Robotics Projects</h3>
          <p class="about-desc">Autonomy builds across VTOL tricopters, Ingenuity-style rotorcraft, and racing simulators, covering control, estimation, and embedded deployment.</p>
        </a>
        <a class="about-card" href="{{ '/publications/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">📚</span>
          <h3 class="about-title">Research Notes</h3>
          <p class="about-desc">Graduate research on nonlinear control, coupled dynamics, and reinforcement learning, distilled into papers, posters, and technical deep dives.</p>
        </a>
        <a class="about-card" href="{{ '/work_experiences/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">🏢</span>
          <h3 class="about-title">Engineering Experience</h3>
          <p class="about-desc">Professional stints where I integrated flight software, safety tooling, and systems engineering practices into production robotics programs.</p>
        </a>
        <a class="about-card" href="{{ '/teaching/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">🎓</span>
          <h3 class="about-title">Teaching & Talks</h3>
          <p class="about-desc">Workshops and talks on control, autonomy, and experimentation designed to bridge rigorous theory with maker-friendly storytelling.</p>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="section-panel">
  <h2 class="section-heading">Skills Snapshot</h2>
    <div class="section-body">
      <div class="skill-panel-list">
        <a class="skill-highlight" href="{{ '/work_experiences/' | relative_url }}">
          <span class="skill-highlight-icon" aria-hidden="true">🏢</span>
          <div class="skill-highlight-copy">
            <h3 class="skill-highlight-title">Work Experiences</h3>
            <p class="skill-highlight-desc">Hands-on rotations across aerospace and robotics programs where I merged flight software, verification tooling, and systems engineering practice.</p>
          </div>
        </a>
        <a class="skill-highlight" href="{{ '/projects/' | relative_url }}">
          <span class="skill-highlight-icon" aria-hidden="true">🛠️</span>
          <div class="skill-highlight-copy">
            <h3 class="skill-highlight-title">Projects</h3>
            <p class="skill-highlight-desc">Prototypes from VTOL controllers to ground-robot autonomy stacks, including simulators, estimation pipelines, and embedded deployments.</p>
          </div>
        </a>
        <a class="skill-highlight" href="{{ '/cv/' | relative_url }}">
          <span class="skill-highlight-icon" aria-hidden="true">🎓</span>
          <div class="skill-highlight-copy">
            <h3 class="skill-highlight-title">Education</h3>
            <p class="skill-highlight-desc">Formal training in automation, control theory, and applied mathematics, with thesis work focused on nonlinear rigid-body dynamics.</p>
          </div>
        </a>
      </div>
    </div>
  </div>

<div class="life-section">
  <div class="section-panel life-panel">
    <h2 class="section-heading life-heading">Beyond Engineering</h2>
    <div class="life-list">
      <a class="life-item" href="https://youtu.be/QU9rJnTvPro?si=brRrWfDxHEmQPqcV" target="_blank" rel="noopener">
        <span class="life-icon" aria-hidden="true">🎸</span>
        <h3 class="life-title">Acoustic Storytelling</h3>
        <p class="life-desc">I enjoy playing the guitar in my free time, exploring fingerstyle arrangements as a way to relax and express myself.</p>
      </a>
      <div class="life-item">
        <span class="life-icon" aria-hidden="true">⚽</span>
        <h3 class="life-title">Collective Energy</h3>
        <p class="life-desc">Live matches and pick-up games recharge me; the rhythm of a midfield run reminds me how teamwork elevates complex engineering missions.</p>
      </div>
      <div class="life-item">
        <span class="life-icon" aria-hidden="true">♟️</span>
        <h3 class="life-title">Strategic Puzzles</h3>
        <p class="life-desc">I enjoy playing chess and regularly train on Chess.com by completing daily exercises, as it helps keep my strategic thinking sharp.</p>
      </div>
      <div class="life-item">
        <span class="life-icon" aria-hidden="true">🪐</span>
        <h3 class="life-title">Cosmic Curiosity</h3>
        <p class="life-desc">I follow astrophysics via podcasts, documentaries, and books, stay updated on recent developments, and occasionally practice with my telescope and astrophotography.</p>
      </div>
      <div class="life-item">
        <span class="life-icon" aria-hidden="true">🌐</span>
        <h3 class="life-title">Open Knowledge</h3>
        <p class="life-desc">I enjoy being part of a social network where knowledge is shared openly through platforms like LinkedIn, GitHub, and community talks.</p>
      </div>
    </div>
    <p class="life-note">These hobbies keep me balanced, sharpen strategic thinking, and sustain the creativity I bring back to engineering.</p>
  </div>
</div>

<div class="section-panel contact-panel">
  <h2 class="section-heading">Let’s Connect</h2>
  <p>I’m always open to new collaborations, research projects, or just a friendly chat about control theory, robotics, or the latest chess opening.</p>
  <p>Prefer a quick ping? Use these shortcuts—they light up when you hover.</p>
  <div class="contact-actions">
    <a class="contact-button contact-button--mail" href="mailto:simoneorelli@icloud.com">Email Me</a>
    <a class="contact-button contact-button--linkedin" href="https://www.linkedin.com/in/simone-orelli-a5b9a1144" target="_blank" rel="noopener">Message on LinkedIn</a>
  </div>
</div>

<p><em>Thanks for stopping by!</em></p>

