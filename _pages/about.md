---
permalink: /
title: "Control Systems Engineer & Robotics Enthusiast"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.skill-section { margin-bottom: 2.5rem; }
.skill-grid { display: grid; gap: 1.25rem; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
.skill-card { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; padding: 1.15rem 0.9rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 16px; background: rgba(255, 255, 255, 0.94); text-decoration: none !important; color: inherit; box-shadow: 0 3px 9px rgba(15, 23, 42, 0.05); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
.skill-card:hover, .skill-card:focus { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 18px rgba(15, 23, 42, 0.09); border-color: rgba(0, 118, 168, 0.28); text-decoration: none !important; }
.skill-card:focus { outline: 3px solid rgba(0, 123, 255, 0.4); outline-offset: 3px; }
.skill-icon { width: 48px; height: 48px; object-fit: contain; transition: transform 0.22s ease; background: transparent; box-shadow: none !important; filter: none !important; display: block; }
.skill-card:hover .skill-icon, .skill-card:focus .skill-icon { transform: scale(1.03); }
.skill-stars { font-size: 0.95rem; letter-spacing: 2px; color: #e0a100; }
.skill-name { font-weight: 600; text-align: center; text-decoration: none !important; }
.skill-card:hover .skill-name, .skill-card:focus .skill-name { text-decoration: underline; }
.skill-stars span { text-decoration: none !important; }
.skill-stars .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
.about-section { margin: 2.8rem 0; }
.about-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.about-card { display: flex; flex-direction: column; gap: 0.65rem; padding: 1.25rem 1.1rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 18px; background: rgba(248, 250, 252, 0.96); box-shadow: 0 3px 9px rgba(15, 23, 42, 0.05); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; color: inherit; text-decoration: none !important; }
.about-card:hover, .about-card:focus-visible { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12); border-color: rgba(0, 118, 168, 0.28); }
.about-card:focus-visible { outline: 3px solid rgba(0, 123, 255, 0.35); outline-offset: 3px; }
.about-icon { font-size: 2rem; }
.about-title { font-weight: 600; font-size: 1.08rem; margin: 0; }
.about-desc { margin: 0; line-height: 1.55; }
.life-section { margin: 3rem 0; }
.life-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.life-card { display: flex; flex-direction: column; gap: 0.75rem; padding: 1.3rem 1.1rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 18px; background: rgba(248, 250, 252, 0.96); box-shadow: 0 3px 9px rgba(15, 23, 42, 0.05); transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
.life-card:hover, .life-card:focus-within { transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12); border-color: rgba(0, 118, 168, 0.28); }
.life-icon { font-size: 1.9rem; }
.life-title { font-weight: 600; font-size: 1.05rem; margin: 0; }
.life-desc { margin: 0; line-height: 1.55; }
.life-link { color: inherit; text-decoration: underline; font-weight: 600; }
.life-card:hover .life-link, .life-card:focus-within .life-link { text-decoration: none; }
</style>

# About Me

I’m Simone Orelli, a **28-year-old control systems engineer** who thrives where robotics, applied mathematics, and software craftsmanship meet. I love translating complex dynamics into controllers that let airframes, ground robots, and embedded platforms move with confidence in the real world.

Right now I’m focused on **nonlinear control of under-actuated rigid bodies** with tightly coupled moment–force dynamics, blending geometric methods with state estimation, guidance, and embedded implementation.

My workflow is research-first: I dive into theory, build high-fidelity prototypes in MATLAB/Simulink, and iterate until the hardware response matches the mathematical intent.

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

---

## Skills Snapshot

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

---

## Beyond Engineering

<div class="life-section">
  <div class="life-grid">
    <div class="life-card">
      <span class="life-icon" aria-hidden="true">🎸</span>
      <h3 class="life-title">[Acoustic Storytelling](https://youtu.be/QU9rJnTvPro?si=LkgSZ5swkY2iJQxP)</h3>
      <p class="life-desc">I unplug with fingerstyle arrangements, including <a class="life-link" href="https://youtu.be/QU9rJnTvPro?si=brRrWfDxHEmQPqcV" target="_blank" rel="noopener">a recent cover</a> tracked in a single take to keep the emotion intact.</p>
    </div>
    <div class="life-card">
      <span class="life-icon" aria-hidden="true">⚽</span>
      <h3 class="life-title">Collective Energy</h3>
      <p class="life-desc">Live matches and pick-up games recharge me; the rhythm of a midfield run reminds me how teamwork elevates complex engineering missions.</p>
    </div>
    <div class="life-card">
      <span class="life-icon" aria-hidden="true">♟️</span>
      <h3 class="life-title">Strategic Puzzles</h3>
      <p class="life-desc">Chess.com drills sharpen my pattern recognition and time-to-decision—the same instincts I rely on when tuning controllers under pressure.</p>
    </div>
    <div class="life-card">
      <span class="life-icon" aria-hidden="true">🪐</span>
      <h3 class="life-title">Cosmic Curiosity</h3>
      <p class="life-desc">Astrophysics podcasts and mission debriefs keep my imagination wide-angle and inspire rigorous, system-level thinking.</p>
    </div>
    <div class="life-card">
      <span class="life-icon" aria-hidden="true">🌐</span>
      <h3 class="life-title">Open Knowledge</h3>
      <p class="life-desc">I love distilling project takeaways for LinkedIn, GitHub, and community talks to spark collaboration and share what works.</p>
    </div>
  </div>
</div>

These rituals keep me balanced, sharpen strategic thinking, and sustain the creativity I bring back to engineering.

---

## Let’s connect

I’m always open to new collaborations, research projects, or just a friendly chat about control theory, robotics, or the latest chess opening.  
Feel free to reach out via [email](mailto:simoneorelli@icloud.com) or connect on [LinkedIn](https://www.linkedin.com/in/simone-orelli-a5b9a1144).

*Thanks for stopping by!*  
