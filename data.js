/* Site content data — single source of truth across all pages.
   Pulled and consolidated from s-orion10/s-orion10.github.io. */
window.SITE_DATA = {
  identity: {
    name: "Simone Orelli",
    yearOfBirth: 1997,
    avatar: "assets/profile.jpg",
    location: "Rome, Italy",
    affiliation: "Sapienza · DIAG",
    field: "Aerial robotics · Nonlinear control",
    currently: "PhD @ Sapienza",
    discipline: "Control + Robotics",
    tagline: "Where is everyone?",
    bioShort:
      "Since 1997. Control systems engineer. Ph.D. student in Automatic Control, Bioengineering and Operations Research at DIAG Sapienza.",
  },

  /* ===== Long-form intro for the home page ===== */
  about: [
    "I'm Simone Orelli, a control systems engineer with a strong interest in robotics, applied mathematics, and software development. I enjoy translating mathematical theory into real-world systems — designing controllers that allow vehicles to move, adapt, and operate reliably in complex environments.",
    "As a control engineer I'm especially drawn to autonomous vehicles that move and interact with their surroundings: drones, robots, and the embedded systems that hold them together. I like working on problems where dynamics matter, where models are imperfect, and where nonlinear control is needed to make theory behave well on real hardware.",
    "Whether I'm tuning a controller, refining a model, or tracking down subtle system behaviours, I enjoy the process of making complex systems work cleanly and predictably in practice.",
  ],

  /* ===== Cards linking out from the home page ===== */
  pageCards: [
    {
      id: "work",
      href: "work.html",
      title: "Work Experiences",
      desc: "Research engineering, autopilot work for the Sapienza Flight Team, tutoring at the Latina campus, and a year of National Civil Service in Sezze.",
      photo: "card-work",
      slotPlaceholder: "Drop a research / lab photo",
    },
    {
      id: "projects",
      href: "projects.html",
      title: "Projects",
      desc: "Builds where theory met hardware — from a Lyapunov-certified geometric controller for tilted multirotors to a tilt-tricopter VTOL, DDP for underactuated robots, and a self-balancing robot.",
      photo: "card-projects",
      slotPlaceholder: "Drop a drone / build render",
    },
    {
      id: "education",
      href: "education.html",
      title: "Education",
      desc: "Doctoral research at DIAG Sapienza, M.Eng. in Control Engineering, B.Eng. in Information Engineering at the Sapienza Latina campus, and a technical-institute diploma in Business Information Systems.",
      photo: "card-education",
      slotPlaceholder: "Drop a Sapienza / campus photo",
    },
    {
      id: "publications",
      href: "publications.html",
      title: "Publications",
      desc: "Papers, theses and preprints — the written record of the research. A space taking shape as the work goes to print.",
      photo: "card-publications",
      slotPlaceholder: "Drop a paper / figure",
    },
    {
      id: "volar",
      href: "volar-robotics.html",
      title: "Volar Robotics",
      desc: "A venture in aerial manipulation and autonomy, currently being defined. More to come soon.",
      photo: "card-volar",
      slotPlaceholder: "Drop a Volar Robotics image",
    },
  ],

  /* ===== Work experiences (master = sourced from /_work_experiences) ===== */
  work: [
    {
      title: "Research Engineer (Research Fellow)",
      org: "Sapienza Università di Roma — SOAR-TOUCH",
      role: "Research",
      where: "Rome (RM)",
      from: "AUG 2025",
      to: "MAY 2026",
      current: false,
      photo: "work-soar",
      slotPlaceholder: "Drop a SOAR-TOUCH / hexarotor photo",
      desc:
        "How can soft optical tactile sensing enable energy-efficient and stable interaction with the environment in aerial robots under external disturbances? Within the SOAR-TOUCH project I addressed this question by designing control strategies and integrating tactile perception on a hexarotor platform.",
      chips: ["Aerial robotics", "Tactile sensing", "Nonlinear control", "Hexarotor"],
      link: {
        label: "Project site",
        href: "https://sites.google.com/diag.uniroma1.it/soar-touch-website",
      },
    },
    {
      title: "Autopilot Control Systems Engineer",
      org: "Sapienza Aerospace Student Association — Sapienza Flight Team",
      role: "Engineering",
      where: "Rome (RM)",
      from: "SEP 2024",
      to: "MAY 2025",
      desc:
        "Partner of the Sapienza Aerospace Student Association (SASA) on the Sapienza Flight Team — a competition-grade tilt-tricopter VTOL UAV.",
      photo: "work-sft",
      slotPlaceholder: "Drop an SFT / Stingray photo",
      details: [
        "Designed a geometric tracking controller for autonomous vertical flight of a VTOL tricopter.",
        "Developed stabilisation strategies and managed flight-phase transitions (hover ↔ forward flight).",
        "Integrated control algorithms into the vehicle's autopilot architecture and simulation environment.",
        "Supported ground and flight tests, analysing telemetry data to refine controller parameters.",
      ],
      chips: ["VTOL", "Geometric control", "MATLAB / Simulink", "Autopilot"],
      link: {
        label: "Sapienza Flight Team",
        href: "https://www.sasa-aerospace.it/flight-team/",
      },
    },
    {
      title: "Tutoring Activity",
      org: "Sapienza Università di Roma — Latina Campus",
      role: "Teaching",
      where: "Latina (LT)",
      from: "OCT 2022",
      to: "JAN 2023",
      desc:
        "Tutor for the course Fondamenti di Automatica I — Teoria dei Sistemi, under the supervision of Prof. Mattia Mattioni. First semester of the 2022/2023 academic year at the Latina campus of Sapienza University of Rome.",
      photo: "work-tutor",
      slotPlaceholder: "Drop a teaching / campus photo",
      details: [
        "Designed and explained integrative exercises covering the core topics of the course.",
        "Conducted weekly problem-solving sessions to support students' understanding.",
        "Coordinated with the course instructor to track progress and adjust materials as needed.",
      ],
      chips: ["Automatic control", "Linear systems", "Tutoring"],
    },
    {
      title: "Universal Civil Service",
      org: "Municipality of Sezze (Comune di Sezze)",
      role: "Volunteering",
      where: "Sezze (LT)",
      from: "SEP 2021",
      to: "SEP 2022",
      desc:
        "Volunteer of the National Civil Service engaged in the social-services sector for the project Help adults and elderly people in difficult conditions.",
      photo: "work-civil",
      slotPlaceholder: "Drop a civil-service photo",
      details: [
        "Assistance to adults in uncomfortable conditions.",
        "Support at municipal offices for initiatives promoted for social services.",
        "Assistance for public events promoting and protecting the territory.",
      ],
      chips: ["Volunteering", "Public service"],
      link: {
        label: "Comune di Sezze",
        href: "https://www.comune.sezze.lt.it",
      },
    },
  ],

  /* ===== Projects (sourced from /_projects on GitHub) ===== */
  projects: [
    {
      title:
        "Nonlinear geometric control of partially-coupled underactuated floating vehicles",
      year: "2024 / 2025",
      org: "Sapienza · Master thesis",
      photo: "proj-gtm",
      slotPlaceholder: "Drop a GTM / tilted-multirotor render",
      desc:
        "Rigorous analysis of an existing geometric control law for generically tilted multirotor (GTM) platforms, originally proposed by Michieletto et al. Bridges empirical validation and theoretical certification with a Lyapunov-based proof of local exponential stability of hovering — the first such result for this broad class of floating rigid bodies.",
      tags: ["Geometric control", "Lyapunov stability", "UAVs", "MATLAB"],
      visual: "drone",
      links: [
        { label: "Thesis PDF", href: "https://s-orion10.github.io/files/master_thesis.pdf" },
        { label: "Video", href: "https://youtu.be/yf1fu_QvG4o" },
      ],
    },
    {
      title: "Stingray — tilt-tricopter VTOL for SUAS 2025",
      year: "Fall 2024 — Present",
      org: "Sapienza Flight Team",
      photo: "proj-stingray",
      slotPlaceholder: "Drop a Stingray VTOL photo",
      desc:
        "Sapienza Flight Team's Stingray VTOL program competing in SUAS 2025 — a novel tilt-tricopter platform that hovers like a multirotor and cruises like a fixed-wing. Geometric controllers for attitude and thrust allocation, MATLAB/Simulink mission sequencing, redundancy monitoring, and envelope protection. SITL and field sorties verified transition logic and gain schedules under gusts and actuator nonlinearities.",
      tags: ["VTOL", "Aerial robotics", "Geometric control", "Simulink"],
      visual: "vtol",
      links: [
        {
          label: "Stingray program",
          href: "https://www.sasa-aerospace.it/flight-team/progetti/stingray/",
        },
        { label: "Video", href: "https://www.youtube.com/watch?v=wRHayHykyXI" },
      ],
    },
    {
      title:
        "DDP for underactuated robots under hard input constraints",
      year: "Winter — Spring 2023/2024",
      org: "Sapienza · Control Problems in Robotics",
      photo: "proj-ddp",
      slotPlaceholder: "Drop a pendubot / acrobot frame",
      desc:
        "Pushed Differential Dynamic Programming beyond textbook form to tame under-actuated robots — fusing DDP with Levenberg–Marquardt regularisation, line-search safeguarding, hard input constraints and a receding-horizon MPC wrapper. Experiments on the pendubot and acrobot show rapid convergence, constraint satisfaction, and graceful swings-to-upright.",
      tags: ["Optimal control", "DDP", "MPC", "Underactuated"],
      visual: "race",
      links: [
        { label: "Paper", href: "https://s-orion10.github.io/files/ddp.pdf" },
        { label: "Video", href: "https://www.youtube.com/watch?v=K4GSg-HV834" },
      ],
    },
    {
      title: "Ingenuity — Mars helicopter digital twin",
      year: "Winter — Spring 2023/2024",
      org: "Sapienza · team project",
      photo: "proj-ingenuity",
      slotPlaceholder: "Drop an Ingenuity render",
      desc:
        "High-fidelity Simulink digital twin of NASA's Ingenuity helicopter — six-DOF rigid-body model with rotor flapping dynamics, motor time constants, and the true martian ISA atmosphere. Compared static feedback-linearisation against nonlinear backstepping; only backstepping survived gusts and saturation by embracing the vehicle's underactuated structure.",
      tags: ["Coaxial rotor", "Simulink", "Modelling", "Backstepping"],
      visual: "rotor",
      links: [
        { label: "Paper", href: "https://s-orion10.github.io/files/ingenuity.pdf" },
        { label: "Video", href: "https://s-orion10.github.io/files/ingenuity_edit.mp4" },
      ],
    },
    {
      title:
        "Decentralised control of EV-fleet charging",
      year: "2023 / 2024",
      org: "Sapienza · Energy Systems",
      photo: "proj-ev",
      slotPlaceholder: "Drop an EV-charging figure",
      desc:
        "Classical and decentralised MPC to schedule optimal charging of a large fleet of plug-in electric vehicles — coordination without a central authority, respecting grid and battery constraints.",
      tags: ["MPC", "Decentralised control", "Energy systems"],
      visual: "race",
      links: [
        { label: "Paper I", href: "https://s-orion10.github.io/files/PEV1.pdf" },
        { label: "Paper II", href: "https://s-orion10.github.io/files/PEV2.pdf" },
      ],
    },
    {
      title:
        "Self-balancing robot on two wheels (GRANDLAND)",
      year: "Autumn — Winter 2023",
      org: "Sapienza · Digital Control Systems",
      photo: "proj-balance",
      slotPlaceholder: "Drop a self-balancing robot photo",
      desc:
        "ACC on a self-balancing wheeled robot built around an Arduino Pro Micro, stepper motors with A4988 drivers and an MPU-6050 IMU. From identification and stabilising controller design to embedded firmware and physical assembly.",
      tags: ["Arduino", "Digital control", "Embedded", "Robotics"],
      visual: "fpga",
      links: [
        { label: "Paper", href: "https://s-orion10.github.io/files/self_balancing.pdf" },
        { label: "Demo", href: "https://s-orion10.github.io/files/demo.mp4" },
      ],
    },
    {
      title:
        "Control of a video-game race car with a CNN",
      year: "2024",
      org: "Sapienza · Machine Learning",
      photo: "proj-cnn",
      slotPlaceholder: "Drop a CarRacing frame",
      desc:
        "Tackled OpenAI Gym's CarRacing-v0 as a frame-by-frame image-classification task. Trained a convolutional network in Keras to turn raw pixels into steering and throttle commands — a self-driving racer from a blank-slate neural net.",
      tags: ["CNN", "Python", "Keras", "Reinforcement"],
      visual: "race",
      links: [
        { label: "Paper", href: "https://s-orion10.github.io/files/HW2_ORELLI.pdf" },
        { label: "Video", href: "https://www.youtube.com/watch?v=xVTm94bYn78" },
      ],
    },
  ],

  /* ===== Education (sourced from CV.md, dates checked against PhD cycle 41) ===== */
  education: [
    {
      title:
        "Ph.D. in Automatic Control, Bioengineering and Operations Research",
      org: "Sapienza Università di Roma · DIAG",
      role: "Doctorate",
      photo: "edu-phd",
      slotPlaceholder: "Drop a DIAG / PhD photo",
      where: "Rome, Italy",
      from: "NOV 2025",
      to: "PRESENT",
      current: true,
      desc:
        "41st cycle within the ABRO research group at DIAG, focusing on modelling and nonlinear control for aerial robotics. Supervised by Prof. Antonio Franchi.",
      chips: ["Aerial robotics", "Nonlinear control", "ABRO"],
      link: {
        label: "Supervisor profile",
        href: "https://www.diag.uniroma1.it/users/antonio_franchi",
      },
    },
    {
      title: "M.Eng. equivalent in Control Engineering",
      org: "Sapienza Università di Roma",
      role: "Master's degree",
      photo: "edu-msc",
      slotPlaceholder: "Drop a graduation photo",
      where: "Rome, Italy",
      from: "OCT 2021",
      to: "JUL 2025",
      desc:
        "M.Sc. in Control Engineering, 110/110 with honours. Thesis on geometric control law design for partially-coupled underactuated floating vehicles — modelling, controller design and stability analysis.",
      chips: ["110/110 cum laude", "Geometric control", "Lyapunov stability"],
    },
    {
      title:
        "B.Eng. equivalent in Information Engineering, Informatics and Statistics",
      org: "Sapienza Università di Roma — Latina campus",
      role: "Bachelor's degree",
      photo: "edu-bsc",
      slotPlaceholder: "Drop a Latina campus photo",
      where: "Latina, Italy",
      from: "SEP 2016",
      to: "OCT 2021",
      desc:
        "Bachelor's degree obtained at the Latina campus with a curriculum focused on computer science — particular emphasis on web programming, database querying and theoretical computer science. 110/110 with honours.",
      chips: ["110/110 cum laude", "Computer science", "Databases"],
    },
    {
      title:
        "Technical Institute Diploma in Business Information Systems",
      org: "ISIS Pacifici & De Magistris",
      role: "High school",
      photo: "edu-diploma",
      slotPlaceholder: "Drop a school photo",
      where: "Sezze (LT), Italy",
      from: "SEP 2011",
      to: "JUL 2016",
      desc:
        "Specialised studies in enterprise information systems, accounting and applied computer science. Completed with final grade 100/100 and internships across local organisations.",
      chips: ["100/100", "Business IT"],
      link: {
        label: "School site",
        href: "https://istitutosuperioresezze.edu.it/scuola/",
      },
    },
  ],

  /* ===== Skills snapshot for the home page (grouped) ===== */
  skills: [
    {
      label: "01",
      title: "Control & Robotics",
      blurb: "The core craft — from continuous-time models to flight code.",
      items: [
        { name: "MATLAB / Simulink", lvl: 3 },
        { name: "Stateflow", lvl: 2 },
        { name: "Nonlinear control", lvl: 3, hint: "Theory" },
        { name: "Geometric control", lvl: 3, hint: "Theory" },
        { name: "Lyapunov design", lvl: 3, hint: "Theory" },
        { name: "MPC", lvl: 3 },
        { name: "ROS", lvl: 3 },
      ],
    },
    {
      label: "02",
      title: "Programming",
      blurb: "Languages and tooling I reach for to turn theory into something that runs.",
      items: [
        { name: "C / C++", lvl: 3 },
        { name: "Python", lvl: 3 },
        { name: "Java", lvl: 2 },
        { name: "Visual Basic", lvl: 3 },
        { name: "LaTeX", lvl: 3 },
        { name: "Git", lvl: 3 },
      ],
    },
    {
      label: "03",
      title: "Hardware & Making",
      blurb: "Where the controller meets a physical thing.",
      items: [
        { name: "Arduino", lvl: 2 },
        { name: "Fusion 360", lvl: 2, hint: "CAD" },
        { name: "3D printing", lvl: 2, hint: "FDM" },
        { name: "Soldering", lvl: 1 },
        { name: "Blender", lvl: 2 },
        { name: "Cisco Packet Tracer", lvl: 3 },
      ],
    },
    {
      label: "04",
      title: "Web & Data",
      blurb: "Bachelor-era foundations from the Latina campus — still useful, still maintained.",
      items: [
        { name: "HTML / CSS", lvl: 3 },
        { name: "JavaScript", lvl: 2 },
        { name: "PHP", lvl: 3 },
        { name: "XML", lvl: 3 },
        { name: "MySQL", lvl: 3 },
        { name: "MariaDB", lvl: 3 },
        { name: "Microsoft SQL", lvl: 3 },
        { name: "E/R modelling", lvl: 3 },
      ],
    },
  ],

  /* ===== Beyond engineering — IMPORTANT: keep YouTube + chess.com links ===== */
  beyond: [
    {
      icon: "guitar",
      h: "Acoustic arrangements",
      p: "Fingerstyle guitar in my free time — exploring arrangements as a way to relax and express myself.",
      href: "https://youtu.be/QU9rJnTvPro?si=brRrWfDxHEmQPqcV",
    },
    {
      icon: "ball",
      h: "Collective energy",
      p: "Live matches and pick-up games recharge me — the rhythm of a midfield run reminds me how teamwork elevates complex engineering missions.",
    },
    {
      icon: "chess",
      h: "Strategic puzzles",
      p: "I play chess and train daily on Chess.com — it keeps my strategic thinking sharp.",
      href: "https://www.chess.com/member/messiorion10",
    },
    {
      icon: "star",
      h: "Cosmic curiosity",
      p: "Astrophysics through podcasts, documentaries and books — plus the occasional night with the telescope and a bit of astrophotography.",
    },
    {
      icon: "globe",
      h: "Open knowledge",
      p: "I enjoy a social network where knowledge is shared openly through platforms like LinkedIn, GitHub and community talks.",
    },
  ],

  /* ===== Socials ===== */
  socials: [
    { id: "email",     label: "Email",     href: "mailto:schol@r-orelli.eu" },
    { id: "linkedin",  label: "LinkedIn",  href: "https://www.linkedin.com/in/simone-orelli-a5b9a1144" },
    { id: "github",    label: "GitHub",    href: "https://github.com/s-orion10" },
    { id: "orcid",     label: "ORCID",     href: "https://orcid.org/0009-0007-6613-8597" },
    { id: "youtube",   label: "YouTube",   href: "https://www.youtube.com/@simoneorelli4296" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/s_orion10" },
  ],

  /* ===== Publications (placeholder — to be filled in later) ===== */
  publications: {
    intro:
      "Papers, theses and preprints will be collected here — the written trail behind the research. The page is intentionally quiet for now; entries arrive as the work goes to print.",
    items: [],
  },

  /* ===== Volar Robotics (placeholder — to be filled in later) ===== */
  volar: {
    intro:
      "A venture in aerial manipulation and autonomy, currently being shaped. This page is a placeholder — the story, the team and the work will land here soon.",
  },

  /* ===== Top-bar navigation between pages ===== */
  nav: [
    { id: "home",         label: "About",        href: "index.html" },
    { id: "work",         label: "Work",         href: "work.html" },
    { id: "projects",     label: "Projects",     href: "projects.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "education",    label: "Education",    href: "education.html" },
    { id: "volar",        label: "Volar Robotics", href: "volar-robotics.html" },
  ],
};
