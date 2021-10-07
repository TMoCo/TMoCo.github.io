---
layout: post
title:  "2D Smooth Particle Hydrodynamics Fluid Simulation"
titlePicture: "/assets/SPH.gif"
category: portfolio
permalink: "/SPH_Fluid_Sim/"
repo: "SPH-2D-Fluid-Simulation"
---

<!--end-excerpt-->

Produced for my fourth year Animation module, this coursework was based on [this paper by Müller et al][document]

![SPH]({{site.url}}/assets/SPH.gif)
<p style="text-align:center; margin-top:-13px">
<em>Simulation with 200 particles</em>
</p>

Unlike other grid-based fluid simulations methods, here fluids are discretised into particles with a certain mass. SPH updates field quantities at discrete locations (the particle's location) by interpolating the contributions of surrounding particles, scaled by a smoothing kernel. For fluids, the paper describes a formula based on the Navier-Stokes equation using three force density fields modelling pressure, viscosity and external forces.\
This was a very interesting piece of coursework and is one I would like to revisit, there are some aspects of the simulation I would like to improve:
- The  paper describes adding surface tension to the simulation
- Experimenting with different integration methods and better neighbouring particle searching methods
- Implementing methods for parallelising the simulation (threading, gpu computation)
- Making the simulation 3D
- Implementing geometry generating methods (such as marching cubes) for impressive video renders

[document]: {{site.url}}/documents/ParticleBasedFluidSimulation.pdf 