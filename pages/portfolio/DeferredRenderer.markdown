---
layout: portfolio_entry
title:  "Deferred Rendering"
titlePicture:  "/assets/Suzanne.png"
permalink: "/Vulkan_Deferred_Renderer/"
repo: "VulkanRenderer"
order: 4
excerpt: A C++ deferred renderer for viewing gltf models with physically based shading and shadow mapping, written with the Vulkan API.
---
<!-- main content -->
{% include captioned_image.html src='assets/composite_gbuffer.png' alt='Gbuffer composite' caption='Composite view of the gbuffer, clockwise: albedo, position, ao-metallic-roughness, normals' %}

This deferred renderer stems from a piece of coursework, a gltf loader and viewer, I made for my master's high performance graphics module.
I had really enjoyed writing the renderer, but wanted to improve on it to learn more about Vulkan, improve my C++ and add more features to it. Consequently, over the summer of 2021 I implemented the following:
- a skybox
- shadow mapping (from a point light)
- physically based shading (based on the Cook-Torrance microfacet specular shading model)


Along with these, I spent a lot of time refactoring already existing code to be cleaner and more efficient with an emphasis on reusability for future projects (an interestingly cathartic exercise). Through this, I learnt to appreciate the freedom afforded by the Vulkan API in designing a renderer which fitted my style. A bonus of learning to use the API and its features is that I gained a much more intimate knowledge of the render pipeline and doing much of the work that OpenGL does in the background for you.

{% include captioned_image.html src='assets/Suzanne.png' alt='Suzanne PBR' caption='Physically based Suzanne' %}

I plan to use this renderer as a basis for a big exercise in software architecture: combining my other small projects and building a mini game engine, with the intent of making a small sci-fi theme game with game-play similar to the amazing Star Fox 64.

Future features of the renderer I want to include:
- another render pass for post processing effects (HDR lighting, bloom, lens flare and blur)
- a more complex material system to better descriptor management
- improved shadows (greater diversity of shadow maps, cascading shadows)
