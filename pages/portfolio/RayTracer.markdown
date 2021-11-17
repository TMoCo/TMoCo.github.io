---
layout: portfolio_entry
title:  "RayTracer"
titlePicture: "/assets/InitialRayTracer.png"
permalink: "/RayTracer/"
repo: "Simple-RayTracer"
order: 6
excerpt: A C++ application for loading a scene, viewing it in OpenGL and saving a ray traced render to an image.
---
<!-- main content -->
{% include captioned_image.html src='assets/RayTracerGUI.png' alt='raytracer gui' caption='Gray cornell box render (100 samples per pixel)' %}

This application was originally a piece of coursework for my 4th year rendering module. I revisited it over the summer with the intention of improving it. The original application was quite slow and produced inacurrate results.\
I started by refactoring the maths classes used in the application to be much faster, specifically vectors, quaternions and matrices. I recently started reading about SIMD and applied them to my classes using the intrinsics in {% include inline.yml code='<xmmintrin.h>' ext='cpp' %}. I compared it to my previous code, which I had optimised as much as possible (using bit-wise operations, loop unravelling...), and got a 200% speedup for the same operations (matrix multiplication, vector addition).\
I wrote my own WaveFrontOBJ file parser, using the .obj files exported by Blender as templates, so that I may easily create my own custom 3D models and be able to render them later.\
\
I built my RayTracer class to be more flexible than my coursework submission to quickly switch between different methods for ray-triangle intersections, hemisphere sampling and triangle sampling.

<div style="display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(4, 1fr);">
<img src="{{site.url}}/assets/correctUVs.png" style="grid-column: 1 / span 2; grid-row: 1 / span 2;">
<img src="{{site.url}}/assets/directions.png" style="grid-column: 3 / span 2; grid-row: 1 / span 2;">
<img src="{{site.url}}/assets/normals.png" style="grid-column: 2 / span 2; grid-row: 3 / span 2;">
</div>
<p style="text-align:center;">
<em>Clockwise: correct UVs, random directions, normals</em>
</p>
This is still work in progress and as you may see from the first image, there are some issues still to be resolved (notice the white spot in the top left corner of the image). However, I intend to fix these and add more features namely:
- a better material system for volumetric rendering
- multithreading, by creating a thread safe stack of image pixel jobs that threads will pop once it's colour has been computed
- Bounding Volume Hierarchies (BVH) and experiment with different Sufrace Area Heuristics (SAH).

This is going to be a fun project!
