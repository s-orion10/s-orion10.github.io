---
title: "Nonlinear geometric control of partially-coupled underactuated floating vehicles"
collection: projects
subject: "Advanced Methods in Control - UAVs - Geometric Tracking Controller - Lyapunov Stability"
permalink: /projects/project-1
venue: "University 'La Sapienza' of Rome"
period: "2024/2025"
paper: "https://s-orion10.github.io/files/master_thesis.pdf"
video: "https://youtu.be/yf1fu_QvG4o"
image: "/images/master_thesis.png"
---

This work presents a rigorous analysis of an **existing geometric control law** specifically developed for **generically tilted multirotor (GTM)** platforms, as originally proposed by Michieletto _et al._ [1,2] for vehicles with arbitrarily placed and tilted propellers. These platforms are fully actuated in orientation and admit at least one direction along which the thrust magnitude can be regulated independently of attitude.

While the effectiveness of the proposed control strategy has been extensively demonstrated through **high-fidelity simulations and experimental validation**, most notably on a tilted hexarotor platform at LAAS-CNRS, its stability properties have so far been supported only empirically. Despite this strong experimental evidence, the literature has lacked a formal analysis capable of certifying the stability of this broad class of floating rigid bodies.

The main contribution of this work is to provide, for the first time, a **rigorous Lyapunov-based stability proof** for the geometric control law proposed by Michieletto _et al._. This analysis bridges the gap between empirical validation and theoretical certification, establishing that the controller guarantees **local exponential stability** of the hovering equilibrium, a critical requirement for safety-critical scenarios, independently of the specific underlying actuator configuration.

The theoretical analysis is complemented by numerical simulations and by a systematic characterization of admissible controller gains, providing explicit conditions on initial states and offering practical insight into the resulting domain of attraction.




[1] _G. Michieletto, M. Ryll, and A. Franchi,
    “Control of Statically Hoverable Multi-Rotor Aerial Vehicles and Application to
    Rotor-Failure Robustness for Hexarotors,”
    in Proc. IEEE Int. Conf. on Robotics and Automation (ICRA),
    Singapore, 2017, pp. 2747–2752, doi: 10.1109/ICRA.2017.7989320._

[2] _G. Michieletto, M. Ryll, and A. Franchi,
    “Fundamental Actuation Properties of Multirotors: Force–Moment Decoupling and
    Fail–Safe Robustness,”
    IEEE Transactions on Robotics, vol. 34, no. 3, pp. 702–715, 2018._


