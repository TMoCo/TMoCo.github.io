---
layout: portfolio_entry
title:  "FakeGL"
titlePicture: "/assets/FakeGL2.gif"
permalink: "/FakeGL/"
repo: "FakeGL"
order: 9
---
<!-- main content -->
The aim of this project was to gain an understanding of the OpenGL render pipeline, and what better way than by reimplementing it from scratch on the CPU?

{% include captioned_image.html src='assets/FakeGL1.gif' alt='FakeGL 1' caption='FakeGL rasterising lines, triangles, interpolating uvs and depth testing' %}

{% include captioned_image.html src='assets/FakeGL2.gif' alt='FakeGL 2' caption='FakeGL geometry shading and texturing' %}

On the left is OpenGL on the GPU, on the right is FakeGL on the CPU; uncanny right? To get these results I had to implement rasteriser functions for the point, line and triangle primitives with depth testing, functions for transforming vertex data, textures and lighting using various geometry shading methods (flat, gouraud and blinn-phong). 



