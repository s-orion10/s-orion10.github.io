---
title: "Design and build of a tilt-tricopter VTOL UAV for SUAS Competition 2025"
collection: projects
subject: "Aerial Robotics - VTOL - Geometric Control - MATLAB - Simulink"
permalink: /projects/stingray-vtol
venue: "Sapienza Flight Team"
period: "Fall 2024 - Present"
date: 2024-10-01
image: "/images/tricopter.png"
---

Sapienza Flight Team launched the [Stingray VTOL program](https://www.sasa-aerospace.it/flight-team/progetti/stingray/) to compete in SUAS 2025 with a novel tilt-tricopter platform capable of hovering like a multirotor and cruising like a fixed-wing aircraft. I lead the design of the mission-planning and control stack that drives the vehicle through vertical, transition, and forward-flight regimes while enforcing the competition safety envelope.

The architecture couples geometric controllers for attitude and thrust allocation with MATLAB/Simulink toolchains for mission sequencing, redundancy monitoring, and envelope protection. Extensive software-in-the-loop testing and repeated field sorties stress-tested fault responses, verified transition logic, and tuned gain schedules so the aircraft can withstand gusts, actuator nonlinearities, and communication dropouts during autonomous sorties.
