---
layout: portfolio_entry
title:  "RayTracer"
titlePicture: "/assets/2kcornellbox.jpg"
permalink: "/RayTracer/"
repo: "RayTracer"
order: 6
excerpt: A C++ application for loading a scene, viewing it in OpenGL and saving a ray traced render to an image.
---
<!-- main content -->
{% include captioned_image.html src='assets/2kcornellbox.jpg' alt='cornell box 2k res' caption='My cornell box (2K resolution image with 300 samples per pixel)' %}

During my master's year I learnt about different rendering paradigms. I was smitten by ray tracing's simple concept and building a ray tracer implementing the techniques I read about has been a goal of mine ever since. \\
This application was originally a piece of coursework for my 4th year rendering module which, although enough for an honorable mark, was inaccurate, clunky, and slow.

My first task was to refactor the 3D maths used in the application to be much faster, specifically vectors, quaternions and matrices. I started with common optimisations such as loop-unravelling, using bitwise operations where possible. [Agner Fog's C++ optimisation guides][agner] are a treasure trove of information for explaining these tricks. \\
I also researched **SIMD parallelism** and applied them to my maths data structures using the built-in intrinsics in <code class="language-cpp">xmmintrin.h</code>. This reduces the number of operations needed resulting in better CPU usage and a drastic speed-up (in my case a 200% speed-up for tasks such as matrix multiplication or vector addition).
<pre><code class="language-cpp">// transpose a 4x4 matrix
Matrix4 Matrix4::transpose(const Matrix4& mat) 
{
  __m128 c0c1 = _mm_shuffle_ps(mat.__m[0], mat.__m[1], _MM_SHUFFLE(1, 0, 1, 0));
  __m128 c2c3 = _mm_shuffle_ps(mat.__m[2], mat.__m[3], _MM_SHUFFLE(1, 0, 1, 0));
  __m128 c1c0 = _mm_shuffle_ps(mat.__m[1], mat.__m[0], _MM_SHUFFLE(2, 3, 2, 3));
  __m128 c3c2 = _mm_shuffle_ps(mat.__m[3], mat.__m[2], _MM_SHUFFLE(2, 3, 2, 3));
  Matrix4 t;
  t.__m[0] = _mm_shuffle_ps(c0c1, c2c3, _MM_SHUFFLE(2, 0, 2, 0));
  t.__m[1] = _mm_shuffle_ps(c0c1, c2c3, _MM_SHUFFLE(3, 1, 3, 1));
  t.__m[2] = _mm_shuffle_ps(c1c0, c3c2, _MM_SHUFFLE(1, 3, 1, 3));
  t.__m[3] = _mm_shuffle_ps(c1c0, c3c2, _MM_SHUFFLE(0, 2, 0, 2));
  return t;
}</code></pre>

I am now the proud owner of a small maths library I can use in all my graphics projects! \\
I also wrote my own WaveFrontOBJ file parser, using the .obj files exported by Blender as templates, so that I may easily create my own custom 3D models and render them. The current iteration uses modern C++ features such as regular expressions to split file lines but I think I will revert to a more C based solution for efficiency.

<div class="flex-wrapper">
<img src="{{site.url}}/assets/correctUVs.png" style="width: 50%;">
<img src="{{site.url}}/assets/directions.png" style="width: 50%;">
<img src="{{site.url}}/assets/normals.png" style="width: 50%;">
<em>Clockwise: correct UVs, random directions, normals. Generated in the old application.</em>
</div>
As my application grew in size and complexity, I quickly found myself hindered by the limitations of my development environment. My coursework used *OpenGL 1.1* (from the Jurassic era) and, due to its much smaller scope, was manageable on my Linux partition with no IDE and no external libary dependencies bar *Qt*. \\
Once I could raytrace objects, I migrated the project to a Windows environment to use Visual Studio and modern *OpenGL* features. \\
To manage the third party libraries I would now need, I learnt to use *CMake* to manage my project and wrote a script to generate Visual Studio solutions. Adding external code now requires only editing a CMakeList file and running the script, no arcane Visual Studio knowledge needed!

I used this change as an occasion to make deep modifications to the application's architecture, such as using *Dear ImGui* instead of *Qt* for the GUI, so much so that practically nothing of the original coursework remains.

<div class="flex-wrapper">
<img src="{{site.url}}/assets/RayTracerGUI.png" style="width: 90%;">
<img src="{{site.url}}/assets/guiiteration4.png" style="width: 90%;">
<em>Top to bottom: Original GUI in Linux, new GUI in Windows.</em>
</div>

Taking inspiration from the fantastic [Physically Based Rendering: From Theory To Implementation][pbr], which has been incredibly useful, I've created a custom scene format based on JSON for loading primitives, either simple geometry or triangle meshes, and customising their properties. The scene is rendered in a debug OpenGL preview and raytraced to an image file.

<div class="flex-wrapper">
<img src="{{site.url}}/assets/PBRv1.jpg" style="width: 50%;">
<img src="{{site.url}}/assets/glassballandlight.jpg" style="width: 50%;">
<img src="{{site.url}}/assets/horizontalBVH.png" style="width: 100%;">
<em>Clockwise: A rusted iron ball, a glass ball illuminated by a ball of light, Horizontal Bounding Volume Hierarchy of a teapot (6320 triangles).</em>
</div>

This project is still very much ongoing as there is a plethora of techniques and desirable features that remain to be added! \\
These include:
- Image Based Lighting, sample from a cube map for beautiful background reflections.
- Multithreading, using thread pools to parallelise tasks like casting rays.
- Volumetric rendering, more complex BSDFs, BTDFs and BSSRDFs.
- More accurate Monte Carlo sampling for faster renders.

For more information on the project and to inspect the source code, please visit the GitHub repository!

[agner]:https://www.agner.org/optimize/#manuals
[pbr]:https://www.pbr-book.org/
