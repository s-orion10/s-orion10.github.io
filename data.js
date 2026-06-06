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
      photoSrc: "images/sft.png",
      slotPlaceholder: "Drop a research / lab photo",
    },
    {
      id: "projects",
      href: "projects.html",
      title: "Projects",
      desc: "Builds where theory met hardware — from a Lyapunov-certified geometric controller for tilted multirotors to a tilt-tricopter VTOL, DDP for underactuated robots, and a self-balancing robot.",
      photo: "card-projects",
      photoSrc: "images/tricopter.png",
      slotPlaceholder: "Drop a drone / build render",
    },
    {
      id: "education",
      href: "education.html",
      title: "Education",
      desc: "Doctoral research at DIAG Sapienza, M.Eng. in Control Engineering, B.Eng. in Information Engineering at the Sapienza Latina campus, and a technical-institute diploma in Business Information Systems.",
      photo: "card-education",
      photoSrc: "images/sapienza.png",
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
      photoSrc: "images/drone.png",
      photos: ["images/drone.png", "images/soar-touch2.png", "images/soar-touch3.png"],
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
      photoSrc: "images/sft.png",
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
      photoSrc: "images/latina.jpg",
      slotPlaceholder: "Drop a teaching / campus photo",
      heroFit: "cover",
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
      photoSrc: "images/servizio_civile_universale_logo.png",
      slotPlaceholder: "Drop a civil-service photo",
      heroFit: "cover",
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

  /* ===== Projects (most recent first) ===== */
  projects: [
    {
      title:
        "Nonlinear geometric control of partially-coupled underactuated floating vehicles",
      year: "2024 / 2025",
      org: "Sapienza · Master thesis",
      photo: "proj-gtm",
      photoSrc: "images/master_thesis.png",
      category: "thesis",
      slotPlaceholder: "Drop a GTM / tilted-multirotor render",
      desc:
        "Rigorous analysis of an existing geometric control law for generically tilted multirotor (GTM) platforms, originally proposed by Michieletto et al. Bridges empirical validation and theoretical certification with a Lyapunov-based proof of local exponential stability of hovering — the first such result for this broad class of floating rigid bodies.",
      body: [
        "This work presents a rigorous analysis of an existing geometric control law specifically developed for generically tilted multirotor (GTM) platforms, as originally proposed by Michieletto et al. [1,2] for vehicles with arbitrarily placed and tilted propellers. These platforms are fully actuated in orientation and admit at least one direction along which the thrust magnitude can be regulated independently of attitude.",
        "While the effectiveness of the proposed control strategy has been extensively demonstrated through high-fidelity simulations and experimental validation, most notably on a tilted hexarotor platform at LAAS-CNRS, its stability properties have so far been supported only empirically. Despite this strong experimental evidence, the literature has lacked a formal analysis capable of certifying the stability of this broad class of floating rigid bodies.",
        "The main contribution of this work is to provide, for the first time, a rigorous Lyapunov-based stability proof for the geometric control law proposed by Michieletto et al. This analysis bridges the gap between empirical validation and theoretical certification, establishing that the controller guarantees local exponential stability of the hovering equilibrium, a critical requirement for safety-critical scenarios, independently of the specific underlying actuator configuration.",
        "The theoretical analysis is complemented by numerical simulations and by a systematic characterization of admissible controller gains, providing explicit conditions on initial states and offering practical insight into the resulting domain of attraction.",
      ],
      references: [
        "G. Michieletto, M. Ryll, and A. Franchi, “Control of Statically Hoverable Multi-Rotor Aerial Vehicles and Application to Rotor-Failure Robustness for Hexarotors,” in Proc. IEEE Int. Conf. on Robotics and Automation (ICRA), Singapore, 2017, pp. 2747–2752, doi: 10.1109/ICRA.2017.7989320.",
        "G. Michieletto, M. Ryll, and A. Franchi, “Fundamental Actuation Properties of Multirotors: Force–Moment Decoupling and Fail–Safe Robustness,” IEEE Transactions on Robotics, vol. 34, no. 3, pp. 702–715, 2018.",
      ],
      tags: ["Geometric control", "Lyapunov stability", "UAVs", "MATLAB"],
      visual: "drone",
      links: [
        { label: "Thesis PDF", href: "https://s-orion10.github.io/files/master_thesis.pdf" },
        { label: "Video", href: "https://youtu.be/yf1fu_QvG4o" },
      ],
    },
    {
      title:
        "DDP for underactuated robots under hard input constraints",
      year: "Winter — Spring 2023/2024",
      org: "Sapienza · Control Problems in Robotics",
      photo: "proj-ddp",
      photoSrc: "images/ddp.png",
      category: "academic",
      slotPlaceholder: "Drop a pendubot / acrobot frame",
      desc:
        "Pushed Differential Dynamic Programming beyond textbook form to tame under-actuated robots — fusing DDP with Levenberg–Marquardt regularisation, line-search safeguarding, hard input constraints and a receding-horizon MPC wrapper. Experiments on the pendubot and acrobot show rapid convergence, constraint satisfaction, and graceful swings-to-upright.",
      body: [
        "We push Differential Dynamic Programming beyond textbook form to tame under-actuated robots — machines with more freedom than motors. By fusing DDP with Levenberg–Marquardt regularisation, line-search safeguarding, hard input constraints, and a receding-horizon (MPC-style) wrapper, we turn a notoriously sensitive optimiser into a robust, real-time controller.",
        "Step-by-step pseudocode and experiments on the pendubot and acrobot show the payoff: rapid convergence, constraint satisfaction, and graceful swings-to-upright that spotlight DDP's power when precision meets smart regularisation.",
      ],
      tags: ["Optimal control", "DDP", "MPC", "Underactuated"],
      visual: "race",
      links: [
        { label: "Paper", href: "https://s-orion10.github.io/files/ddp.pdf" },
        { label: "Video", href: "https://www.youtube.com/watch?v=K4GSg-HV834" },
      ],
    },
    {
      title: "Stingray — tilt-tricopter VTOL for SUAS 2025",
      year: "Fall 2024 — 2025",
      org: "Sapienza Flight Team",
      photo: "proj-stingray",
      photoSrc: "images/tricopter.png",
      category: "academic",
      slotPlaceholder: "Drop a Stingray VTOL photo",
      desc:
        "Sapienza Flight Team's Stingray VTOL program for SUAS 2025 — a novel tilt-tricopter platform that hovers like a multirotor and cruises like a fixed-wing. Geometric controllers for attitude and thrust allocation, MATLAB/Simulink mission sequencing, redundancy monitoring, and envelope protection, validated through SITL and field sorties.",
      body: [
        "Sapienza Flight Team launched the Stingray VTOL program to compete in SUAS 2025 with a novel tilt-tricopter platform capable of hovering like a multirotor and cruising like a fixed-wing aircraft. I led the design of the mission-planning and control stack that drove the vehicle through vertical, transition, and forward-flight regimes while enforcing the competition safety envelope.",
        "The architecture couples geometric controllers for attitude and thrust allocation with MATLAB/Simulink toolchains for mission sequencing, redundancy monitoring, and envelope protection. Extensive software-in-the-loop testing and repeated field sorties stress-tested fault responses, verified transition logic, and tuned gain schedules so the aircraft could withstand gusts, actuator nonlinearities, and communication dropouts during autonomous sorties.",
      ],
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
        "Control of a video-game race car with a CNN",
      year: "2024",
      org: "Sapienza · Machine Learning",
      photo: "proj-cnn",
      photoSrc: "images/ML.png",
      category: "academic",
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
    {
      title:
        "Decentralised control of EV-fleet charging",
      year: "2023 / 2024",
      org: "Sapienza · Energy Systems",
      photo: "proj-ev",
      photoSrc: "images/ccen.png",
      category: "academic",
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
      title: "Ingenuity — Mars helicopter digital twin",
      year: "Winter — Spring 2023/2024",
      org: "Sapienza · team project",
      photo: "proj-ingenuity",
      photoSrc: "images/ingenuity.png",
      category: "academic",
      slotPlaceholder: "Drop an Ingenuity render",
      desc:
        "High-fidelity Simulink digital twin of NASA's Ingenuity helicopter — six-DOF rigid-body model with rotor flapping dynamics, motor time constants, and the true martian ISA atmosphere. Compared static feedback-linearisation against nonlinear backstepping; only backstepping survived gusts and saturation by embracing the vehicle's underactuated structure.",
      body: [
        "Teaming up with three fellow engineers, I spearheaded the creation of a high-fidelity Simulink digital twin of NASA's historic Ingenuity helicopter — the first aircraft ever to achieve powered flight on another planet (Mars, 2021–2024). We began by mining published aerodynamic data, rotorcraft papers, and flight-test logs, then fused them into a six-DOF rigid-body model complete with rotor flapping dynamics, motor time constants, and the true martian ISA atmosphere (≈ 0.016 kg/m³, 3.72 m/s² gravity).",
        "Once the physics were nailed down, we designed and compared two radically different control paradigms:",
      ],
      bullets: [
        "Static feedback-linearisation — an elegant input-output decoupling scheme that flattened the nonlinear dynamics but struggled to stay robust under martian gusts and actuator saturation.",
        "Nonlinear backstepping — a recursive Lyapunov-based strategy that embraced Ingenuity's under-actuated nature, chaining stabilising virtual controls all the way from attitude to position.",
      ],
      bodyAfter: [
        "Among the two, only the latter returns satisfactory results, as it is able to achieve the objectives by exploiting the fact that Ingenuity is an underactuated robot.",
      ],
      tags: ["Coaxial rotor", "Simulink", "Modelling", "Backstepping"],
      visual: "rotor",
      links: [
        { label: "Paper", href: "https://s-orion10.github.io/files/ingenuity.pdf" },
        { label: "Video", href: "https://s-orion10.github.io/files/ingenuity_edit.mp4" },
      ],
    },
    {
      title:
        "Self-balancing robot on two wheels (GRANDLAND)",
      year: "Autumn — Winter 2023",
      org: "Sapienza · Digital Control Systems",
      photo: "proj-balance",
      photoSrc: "images/grandland.png",
      category: "academic",
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
      title: "Markov & semi-Markov chains: memoryless processes and fractional evolution",
      year: "2021",
      org: "Sapienza · Bachelor thesis",
      photo: "proj-bachelor",
      photoSrc: "images/triennale.png",
      category: "thesis",
      slotPlaceholder: "Drop a Markov-chain figure",
      heroFit: "contain",
      desc:
        "Bachelor thesis bridging classical probability and mathematical physics — from continuous-time Markov chains to semi-Markov processes with heavy-tailed Mittag-Leffler waiting times, governed by non-local Caputo fractional operators. Advisor: Prof. Costantino Ricciuti.",
      body: [
        "This research bridges classical probability and advanced mathematical physics to model complex dynamic systems. Starting with standard, continuous-time Markov chains and their strict memoryless constraints, the work transitions into the domain of semi-Markov processes by introducing heavy-tailed wait times, specifically through the Mittag-Leffler distribution.",
        "The core of the thesis demonstrates how replacing standard time derivatives with non-local Caputo fractional operators yields the precise integro-differential equations that govern time-fractional backward dynamics.",
        "This project provided me with a rigorous foundation in state-space modelling and analytical control theory — tools that directly support my current approach to managing unpredictable environments and noisy sensor data in robotics.",
      ],
      tags: ["Probability", "Markov chains", "Fractional calculus", "Stochastic processes"],
      visual: "fpga",
      links: [
        { label: "Thesis PDF", href: "files/triennale.pdf" },
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
      photoSrc: "images/sapienza.png",
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
      title: "M.Sc. in Control Engineering (LM-25)",
      org: "Sapienza Università di Roma",
      role: "Master's degree",
      photo: "edu-msc",
      photoSrc: "images/sapienza.png",
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
        "B.Sc. in Information Engineering, Computer Science and Statistics (L-8)",
      org: "Sapienza Università di Roma — Latina campus",
      role: "Bachelor's degree",
      photo: "edu-bsc",
      photoSrc: "images/sapienza.png",
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
      photoSrc: "images/ISIS_Pacifici_e_DeMagistris.png",
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
      icon: "music",
      h: "Acoustic arrangements",
      p: "Fingerstyle guitar in my free time — exploring arrangements as a way to relax and express myself.",
      href: "https://youtu.be/QU9rJnTvPro?si=brRrWfDxHEmQPqcV",
    },
    {
      icon: "team",
      h: "Collective energy",
      p: "Live matches and pick-up games recharge me — the rhythm of a midfield run reminds me how teamwork elevates complex engineering missions.",
    },
    {
      icon: "puzzle",
      h: "Strategic puzzles",
      p: "I play chess and train daily on Chess.com — it keeps my strategic thinking sharp.",
      href: "https://www.chess.com/member/messiorion10",
    },
    {
      icon: "planet",
      h: "Cosmic curiosity",
      p: "Astrophysics through podcasts, documentaries and books — plus the occasional night with the telescope and a bit of astrophotography.",
    },
    {
      icon: "share",
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
