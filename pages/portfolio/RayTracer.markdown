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

This application was originally a piece of coursework for my 4th year rendering module. I revisited it over the summer with the intention of improving it as I found the original application too slow and a inaccurate.

My first task was the refactoring of the maths classes used in the application to be much faster, specifically vectors, quaternions and matrices. I started with common optimisations such as loop-unravelling, using bitwise operations where possible. [Agner Fog's C++ optimisation guides][agner] are a treasure trove of information for explaining these tricks.
I also researched SIMD parallelism and applied them to my maths classes using the built-in intrinsics in <code class="language-cpp">xmmintrin.h</code>. Compared to my previous optimisations, I obtained a 200% speed-up for the same operations (matrix multiplication, vector addition).

I also wrote my own WaveFrontOBJ file parser, using the .obj files exported by Blender as templates, so that I may easily create my own custom 3D models and be able to render them later.

<div class="flex-wrapper">
<img src="{{site.url}}/assets/correctUVs.png" style="width: 50%;">
<img src="{{site.url}}/assets/directions.png" style="width: 50%;">
<img src="{{site.url}}/assets/normals.png" style="width: 50%;">
<em>Clockwise: correct UVs, random directions, normals</em>
</div>

Once I could raytrace objects, I migrated from a Linux to Windows development environment to use Visual Studio and modern OpenGL features (the coursework used OpenGL 1.1).
To manage third party libraries, I learnt to use CMake to manage my project and wrote a script to generate a Visual Studio solutions.

Taking inspiration from the fantastic [Physically Based Rendering: From Theory To Implementation][pbr], I've created a custom scene format for loading geometric primitives which can be viewed rendered in OpenGL and raytraced to an image file.

This is still work in progress and as you may see from the first image, there are some issues still to be resolved (notice the white spot in the top left corner of the image).
However, I intend to fix these and add more features namely:
- a better material system for volumetric rendering
- multithreading, by creating a thread safe stack of image pixel jobs that threads will pop once it's colour has been computed
- Bounding Volume Hierarchies (BVH) and experiment with different Sufrace Area Heuristics (SAH).

So far this has been a really fun project and I love adding more to it whenever can.

[agner]:https://www.agner.org/optimize/#manuals
[pbr]:https://www.pbr-book.org/
