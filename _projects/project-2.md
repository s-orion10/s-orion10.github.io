---
title: "Ingenuity"
collection: projects
subject: "Control Problems in Robotics - UAVs - Model Based"
permalink: /projects/project-4
venue: "University 'La Sapienza' of Rome"
period: "Winter - Spring 2023/2024"
paper: "https://s-orion10.github.io/files/ingenuity.pdf"
video: "https://s-orion10.github.io/files/ingenuity_edit.mp4"
image: "/images/ingenuity.png"
---

Teaming up with three fellow engineers, I spearheaded the creation of a **high-fidelity Simulink digital twin** of NASA’s historic *Ingenuity* helicopter—the first aircraft ever to achieve powered flight on another planet (Mars, 2021 – 2024).  We began by mining published aerodynamic data, rotorcraft papers, and flight-test logs, then fused them into a six-DOF rigid-body model complete with rotor flapping dynamics, motor time constants, and the true martian ISA atmosphere (≈ 0.016 kg/m³, 3.72 m/s² gravity).

Once the physics were nailed down, we designed and compared two radically different control paradigms:

* **Static feedback-linearisation**—an elegant input-output decoupling scheme that flattened the nonlinear dynamics but struggled to stay robust under martian gusts and actuator saturation.
* **Nonlinear backstepping**—a recursive Lyapunov-based strategy that embraced Ingenuity’s under-actuated nature, chaining stabilising virtual controls all the way from attitude to position.

Among the two, only the latter returns satisfactory results, as it is able to achieve the objectives by exploiting the fact that Ingenuity is an underactuated robot.
