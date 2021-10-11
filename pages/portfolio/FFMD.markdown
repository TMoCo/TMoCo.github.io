---
layout: portfolio_entry
title:  "Mesh Free Form Deformation"
titlePicture:  "/assets/FreeFormDeformation.gif"
permalink: "/Free-Form-Deformation/"
repo: "FFD-tool"
order: 7
---
<!-- main content -->
{% include captioned_image.html src='assets/FreeFormDeformation.gif' alt='mesh deform' caption='Plane mesh deformation' %}

The goal of this coursework was to create an app for deforming meshes in 2D and 3D using various grid shapes. Each mesh vertex in a grid cell is parameterised by the cell's vertices, such that pulling a grid verex will also pull the mesh vertices with the cell. The app can generate regular 2D and 3D grids, as well as a randomly triangulated 2D grid. Attenuation can be enabled such that moving a grid vertex will result in a displacement of neighbouring grid vertices, the latter's intensity is scaled by the other grid vetices' proximity. This results in a larger deformation of the overall mesh.