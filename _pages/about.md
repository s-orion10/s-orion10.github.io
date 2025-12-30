---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
:root {
  --profile-panel-bg: rgba(248, 250, 252, 0.98);
  --profile-panel-border: rgba(0, 0, 0, 0.08);
  --profile-panel-shadow: 0 3px 12px rgba(15, 23, 42, 0.08);
  --profile-card-bg: rgba(255, 255, 255, 0.96);
  --profile-card-border: rgba(0, 0, 0, 0.08);
  --profile-card-shadow: 0 3px 9px rgba(15, 23, 42, 0.05);
  --profile-card-hover-border: rgba(0, 118, 168, 0.28);
  --profile-card-hover-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
  --profile-contact-bg: rgba(148, 163, 184, 0.18);
  --profile-contact-border: rgba(148, 163, 184, 0.45);
  --profile-contact-color: #475569;
  --profile-contact-hover-bg: rgba(148, 163, 184, 0.26);
  --profile-contact-hover-border: rgba(148, 163, 184, 0.6);
  --profile-contact-hover-color: #1f2937;
  --profile-contact-shadow: 0 3px 9px rgba(15, 23, 42, 0.08);
  --profile-contact-hover-shadow: 0 6px 16px rgba(15, 23, 42, 0.16);
  --profile-mail-accent-bg: rgba(16, 185, 129, 0.16);
  --profile-mail-accent-border: rgba(16, 185, 129, 0.55);
  --profile-mail-accent-color: #065f46;
  --profile-linkedin-accent-bg: rgba(14, 118, 168, 0.18);
  --profile-linkedin-accent-border: rgba(14, 118, 168, 0.6);
  --profile-linkedin-accent-color: #0b4870;
  --profile-note-color: #1f2933;
  --profile-icon-filter: none;
}

html[data-theme="dark"] {
  /* Panel */
  --profile-panel-bg: rgba(50, 50, 58, 0.94);
  --profile-panel-border: rgba(176, 183, 195, 0.38);
  --profile-panel-shadow: 0 14px 28px rgba(14, 14, 20, 0.45);

  /* Cards */
  --profile-card-bg: rgba(68, 70, 82, 0.92);
  --profile-card-border: rgba(176, 183, 195, 0.34);
  --profile-card-shadow: 0 8px 18px rgba(14, 14, 20, 0.42);
  --profile-card-hover-border: rgba(226, 232, 240, 0.5);
  --profile-card-hover-shadow: 0 18px 30px rgba(14, 14, 20, 0.48);

  /* Contact blocks */
  --profile-contact-bg: rgba(160, 174, 192, 0.18);
  --profile-contact-border: rgba(160, 174, 192, 0.38);
  --profile-contact-color: #f1f5f9;
  --profile-contact-hover-bg: rgba(160, 174, 192, 0.26);
  --profile-contact-hover-border: rgba(160, 174, 192, 0.5);
  --profile-contact-hover-color: #ffffff;
  --profile-contact-shadow: 0 8px 18px rgba(12, 12, 18, 0.42);
  --profile-contact-hover-shadow: 0 14px 26px rgba(12, 12, 18, 0.48);

  /* Accents */
  --profile-mail-accent-bg: rgba(16, 185, 129, 0.24);
  --profile-mail-accent-border: rgba(16, 185, 129, 0.5);
  --profile-mail-accent-color: #d1fae5;

  --profile-linkedin-accent-bg: rgba(186, 200, 220, 0.22);
  --profile-linkedin-accent-border: rgba(186, 200, 220, 0.5);
  --profile-linkedin-accent-color: #eff6ff;

  /* Notes & icons */
  --profile-note-color: #f1f5f9;
  --profile-icon-filter: none;
}

.skill-section { margin-bottom: 2.5rem; }
.skill-grid { display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 0.6rem; scroll-snap-type: x proximity; }
.skill-grid::-webkit-scrollbar { height: 6px; }
.skill-grid::-webkit-scrollbar-track { background: rgba(148, 163, 184, 0.15); border-radius: 999px; }
.skill-grid::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.45); border-radius: 999px; }
.skill-card { display: flex; flex-direction: column; align-items: center; gap: 0.35rem; padding: 0.65rem; border: 1px solid var(--profile-card-border); border-radius: 16px; background: var(--profile-card-bg); text-decoration: none !important; color: inherit; box-shadow: var(--profile-card-shadow); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; width: 92px; min-height: 92px; justify-content: center; flex: 0 0 auto; scroll-snap-align: start; }
.skill-card:hover, .skill-card:focus { transform: translateY(-2px) scale(1.03); box-shadow: var(--profile-card-hover-shadow); border-color: var(--profile-card-hover-border); text-decoration: none !important; }
.skill-card:focus { outline: 3px solid rgba(0, 123, 255, 0.4); outline-offset: 3px; }
.skill-icon { width: 40px; height: 40px; object-fit: contain; transition: transform 0.22s ease; background: transparent; box-shadow: none !important; filter: var(--profile-icon-filter); display: block; }
.skill-card:hover .skill-icon, .skill-card:focus .skill-icon { transform: scale(1.03); }
.skill-stars { font-size: 0.95rem; letter-spacing: 2px; color: #e0a100; opacity: 0; max-height: 0; overflow: hidden; transition: opacity 0.18s ease, max-height 0.18s ease, transform 0.18s ease; transform: translateY(8px); }
.skill-name { font-weight: 600; text-align: center; text-decoration: none !important; opacity: 0; max-height: 0; overflow: hidden; transition: opacity 0.18s ease, max-height 0.18s ease, transform 0.18s ease; transform: translateY(8px); }
.skill-card:hover .skill-stars, .skill-card:focus .skill-stars,
.skill-card:hover .skill-name, .skill-card:focus .skill-name { opacity: 1; max-height: 60px; transform: translateY(0); }
.skill-card:hover .skill-name, .skill-card:focus .skill-name { text-decoration: underline; }
.skill-stars span { text-decoration: none !important; }
.skill-stars .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
.about-section { margin: 0; }
.about-list { display: flex; flex-direction: column; gap: 1rem; }
.about-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1.15rem 1.05rem; border: 1px solid var(--profile-card-border); border-radius: 16px; background: var(--profile-card-bg); box-shadow: var(--profile-card-shadow); color: inherit; text-decoration: none !important; transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
.about-item:hover, .about-item:focus-visible { transform: translateY(-2px) scale(1.02); box-shadow: var(--profile-card-hover-shadow); border-color: var(--profile-card-hover-border); text-decoration: none !important; }
.about-item:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.about-icon { display: flex; align-items: center; justify-content: center; font-size: 1.9rem; line-height: 1; flex-shrink: 0; margin-top: 0.1rem; }
.about-content { display: flex; flex-direction: column; gap: 0.45rem; }
.about-title { font-weight: 600; font-size: 1.05rem; margin: 0; }
.about-desc { margin: 0; line-height: 1.55; }
.section-panel { margin: 3rem 0; display: flex; flex-direction: column; gap: 1.6rem; padding: 1.6rem 1.35rem; border: 1px solid var(--profile-panel-border); border-radius: 22px; background: var(--profile-panel-bg); box-shadow: var(--profile-panel-shadow); }
.section-panel:first-of-type { margin-top: 0; }
.section-panel p { margin: 0; line-height: 1.6; }
.section-panel p + p { margin-top: 0.9rem; }
.section-heading { margin: 0; font-size: 1.32rem; font-weight: 700; letter-spacing: 0.01em; }
.section-body { display: flex; flex-direction: column; gap: 2.4rem; }
.section-body .skill-section { margin: 0; }
.life-section { margin: 3rem 0; }
.life-section .section-panel { margin: 0; }
.life-heading { margin: 0; font-size: 1.32rem; font-weight: 700; letter-spacing: 0.01em; }
.life-note { margin: 0; line-height: 1.6; color: var(--profile-note-color); }
.contact-panel { position: relative; }
.contact-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
.contact-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.55rem 1.1rem; border-radius: 999px; font-weight: 600; text-decoration: none; border: 1px solid var(--profile-contact-border); background: var(--profile-contact-bg); color: var(--profile-contact-color); box-shadow: var(--profile-contact-shadow); transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease; }
.contact-button:hover, .contact-button:focus-visible { transform: translateY(-1px); box-shadow: var(--profile-contact-hover-shadow); background: var(--profile-contact-hover-bg); border-color: var(--profile-contact-hover-border); color: var(--profile-contact-hover-color); outline: none; }
.contact-button:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.contact-button--mail:hover, .contact-button--mail:focus-visible { background: var(--profile-mail-accent-bg); border-color: var(--profile-mail-accent-border); color: var(--profile-mail-accent-color); }
.contact-button--linkedin:hover, .contact-button--linkedin:focus-visible { background: var(--profile-mail-accent-bg); border-color: var(--profile-mail-accent-border); color: var(--profile-mail-accent-color); }
</style>

<div class="section-panel">
  <div class="section-body">
    <p>I’m Simone Orelli, a control systems engineer with a strong interest in robotics, applied mathematics, and software development. I enjoy translating mathematical theory into real-world systems, designing controllers that allow vehicles to move, adapt, and operate reliably in complex environments. As a control engineer, I am especially drawn to autunomous vehicles that move and interact with their surroundings, such as drones, robots, and autonomous systems. I like working on problems where dynamics matter, where models are imperfect, and where nonlinear control is needed to make theory behave well on real hardware. Whether I am tuning a controller, refining a model, or tracking down subtle system behaviors, I enjoy the process of making complex systems work cleanly and predictably in practice.</p>
    <div class="about-section">
      <div class="about-list">
        <a class="about-item" href="{{ '/work_experiences/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">🏢</span>
          <div class="about-content">
            <h3 class="about-title">Work Experiences</h3>
            <p class="about-desc">Professional rotations where I integrated flight software, safety tooling, and systems engineering into production robotics programs.</p>
          </div>
        </a>
        <a class="about-item" href="{{ '/projects/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">🛠️</span>
          <div class="about-content">
            <h3 class="about-title">Projects</h3>
            <p class="about-desc">Hands-on autonomy builds spanning VTOL tricopters, Ingenuity-style rotorcraft, and racing simulators focused on control and estimation.</p>
          </div>
        </a>
        <a class="about-item" href="{{ '/cv/' | relative_url }}">
          <span class="about-icon" aria-hidden="true">🎓</span>
          <div class="about-content">
            <h3 class="about-title">Education</h3>
            <p class="about-desc">Academic training in control theory, robotics, and applied mathematics, connecting graduate research with experimental lab work.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="section-panel">
  <h2 class="section-heading">Skills Snapshot</h2>
  <div class="section-body">
    <div class="skill-section">
  <h3>Software &amp; Tools</h3>
  <div class="skill-grid">
    <a class="skill-card" href="https://www.arduino.cc/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/arduino.svg?color=00979D" alt="Arduino logo">
      <div class="skill-stars" aria-label="2 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9734;</span><span class="sr-only">Advanced</span></div>
      <div class="skill-name">Arduino</div>
    </a>
    <a class="skill-card" href="https://www.blender.org/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/blender.svg?color=F5792A" alt="Blender logo">
      <div class="skill-stars" aria-label="2 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9734;</span><span class="sr-only">Advanced</span></div>
      <div class="skill-name">Blender</div>
    </a>
    <a class="skill-card" href="https://www.netacad.com/courses/packet-tracer" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/cisco.svg?color=1BA0D7" alt="Cisco logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">Cisco Packet Tracer</div>
    </a>
    <a class="skill-card" href="https://www.autodesk.com/products/fusion-360" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/autodesk.svg?color=0696D7" alt="Autodesk logo">
      <div class="skill-stars" aria-label="2 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9734;</span><span class="sr-only">Advanced</span></div>
      <div class="skill-name">Fusion 360</div>
    </a>
    <a class="skill-card" href="https://www.microsoft.com/microsoft-365" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftoffice.svg?color=D83B01" alt="Microsoft Office logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">Microsoft Office</div>
    </a>
    <a class="skill-card" href="https://www.ros.org/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/ros.svg?color=22314E" alt="ROS logo">
      <div class="skill-stars" aria-label="1 out of 3 stars"><span aria-hidden="true">&#9733;&#9734;&#9734;</span><span class="sr-only">Proficient</span></div>
      <div class="skill-name">ROS</div>
    </a>
    <a class="skill-card" href="https://www.mathworks.com/products/simulink.html" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mathworks.svg?color=0076A8" alt="Simulink logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">Simulink</div>
    </a>
    <a class="skill-card" href="https://www.mathworks.com/products/stateflow.html" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mathworks.svg?color=FF6F00" alt="Stateflow logo">
      <div class="skill-stars" aria-label="2 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9734;</span><span class="sr-only">Advanced</span></div>
      <div class="skill-name">Stateflow</div>
    </a>
  </div>
</div>

<div class="skill-section">
  <h3>Programming &amp; Formatting</h3>
  <div class="skill-grid">
    <a class="skill-card" href="https://isocpp.org/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/cplusplus.svg?color=00599C" alt="C++ logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">C/C++</div>
    </a>
    <a class="skill-card" href="https://www.java.com/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg?color=007396" alt="Java logo">
      <div class="skill-stars" aria-label="2 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9734;</span><span class="sr-only">Advanced</span></div>
      <div class="skill-name">Java</div>
    </a>
    <a class="skill-card" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mathworks.svg?color=EF3B2D" alt="MATLAB logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">MATLAB</div>
    </a>
    <a class="skill-card" href="https://www.python.org/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg?color=3776AB" alt="Python logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">Python</div>
    </a>
    <a class="skill-card" href="https://learn.microsoft.com/visualstudio/vba/?view=vs-2022" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/visualbasic.svg?color=512BD4" alt="Visual Basic logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">Visual Basic</div>
    </a>
  </div>
</div>

<div class="skill-section">
  <h3>Web Languages</h3>
  <div class="skill-grid">
    <a class="skill-card" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg?color=1572B6" alt="CSS logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">CSS</div>
    </a>
    <a class="skill-card" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg?color=E34F26" alt="HTML logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">HTML</div>
    </a>
    <a class="skill-card" href="https://www.javascript.com/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg?color=F7DF1E" alt="JavaScript logo">
      <div class="skill-stars" aria-label="2 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9734;</span><span class="sr-only">Advanced</span></div>
      <div class="skill-name">JavaScript</div>
    </a>
    <a class="skill-card" href="https://www.latex-project.org/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/latex.svg?color=008080" alt="LaTeX logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">LaTeX</div>
    </a>
    <a class="skill-card" href="https://www.php.net/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/php.svg?color=777BB4" alt="PHP logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">PHP</div>
    </a>
    <a class="skill-card" href="https://www.w3.org/XML/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/xml.svg?color=005A9C" alt="XML logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">XML</div>
    </a>
  </div>
</div>

<div class="skill-section">
  <h3>Database</h3>
  <div class="skill-grid">
    <a class="skill-card" href="https://www.diagrams.net/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/diagramsdotnet.svg?color=F08705" alt="Diagrams icon">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">E/R Scheme</div>
    </a>
    <a class="skill-card" href="https://mariadb.org/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mariadb.svg?color=003545" alt="MariaDB logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">MariaDB</div>
    </a>
    <a class="skill-card" href="https://www.microsoft.com/sql-server" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/microsoftsqlserver.svg?color=CC2927" alt="Microsoft SQL Server logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">Microsoft SQL</div>
    </a>
    <a class="skill-card" href="https://www.mysql.com/" target="_blank" rel="noopener">
      <img class="skill-icon" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg?color=4479A1" alt="MySQL logo">
      <div class="skill-stars" aria-label="3 out of 3 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;</span><span class="sr-only">Expert</span></div>
      <div class="skill-name">MySQL</div>
    </a>
  </div>
</div>
  </div>
</div>

<div class="life-section">
  <div class="section-panel life-panel">
    <h2 class="section-heading life-heading">Beyond Engineering</h2>
    <div class="about-list">
      <a class="about-item" href="https://youtu.be/QU9rJnTvPro?si=brRrWfDxHEmQPqcV" target="_blank" rel="noopener">
        <span class="about-icon" aria-hidden="true">🎸</span>
        <div class="about-content">
          <h3 class="about-title">Acoustic Arrangements</h3>
          <p class="about-desc">I enjoy playing the guitar in my free time, exploring fingerstyle arrangements as a way to relax and express myself.</p>
        </div>
      </a>
      <div class="about-item">
        <span class="about-icon" aria-hidden="true">⚽</span>
        <div class="about-content">
          <h3 class="about-title">Collective Energy</h3>
          <p class="about-desc">Live matches and pick-up games recharge me; the rhythm of a midfield run reminds me how teamwork elevates complex engineering missions.</p>
        </div>
      </div>
      <div class="about-item">
        <span class="about-icon" aria-hidden="true">♟️</span>
        <div class="about-content">
          <h3 class="about-title">Strategic Puzzles</h3>
          <p class="about-desc">I enjoy playing chess and regularly train on Chess.com by completing daily exercises, as it helps keep my strategic thinking sharp.</p>
        </div>
      </div>
      <div class="about-item">
        <span class="about-icon" aria-hidden="true">🪐</span>
        <div class="about-content">
          <h3 class="about-title">Cosmic Curiosity</h3>
          <p class="about-desc">I follow astrophysics via podcasts, documentaries, and books, stay updated on recent developments, and occasionally practice with my telescope and astrophotography.</p>
        </div>
      </div>
      <div class="about-item">
        <span class="about-icon" aria-hidden="true">🌐</span>
        <div class="about-content">
          <h3 class="about-title">Open Knowledge</h3>
          <p class="about-desc">I enjoy being part of a social network where knowledge is shared openly through platforms like LinkedIn, GitHub, and community talks.</p>
        </div>
      </div>
    </div>
    <p class="life-note">These hobbies keep me balanced, sharpen strategic thinking, and sustain the creativity I bring back to engineering.</p>
  </div>
</div>

<div class="section-panel contact-panel">
  <h2 class="section-heading">Let’s Connect</h2>
  <p>I’m always open to new collaborations, research projects, or just a friendly chat about control theory, robotics, or the latest chess opening.</p>
  <p>Prefer a quick ping? Use these shortcuts.</p>
  <div class="contact-actions">
    <a class="contact-button contact-button--mail" href="mailto:simoneorelli@icloud.com">Email Me</a>
    <a class="contact-button contact-button--linkedin" href="https://www.linkedin.com/in/simone-orelli-a5b9a1144" target="_blank" rel="noopener">Message on LinkedIn</a>
  </div>
</div>

<p><em>Thanks for stopping by!</em></p>



