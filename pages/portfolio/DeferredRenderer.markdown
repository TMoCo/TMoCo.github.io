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
The Vulkan deferred renderer was originally a piece of coursework made for my master's high performance graphics module.

{% include captioned_image.html src='assets/composite_gbuffer.png' alt='Gbuffer composite' caption='Composite view of the gbuffer, clockwise: albedo, position, ao-metallic-roughness, normals' %}

I really enjoyed writing the renderer, but couldn't escape the feeling that I could improve on it and add more features to it. Consequently, over the summer I implemented the following features:
- a skybox
- shadow mapping (from a point light)
- physically based shading

{% include captioned_image.html src='assets/Suzanne.png' alt='Suzanne PBR' caption='Physically based Suzanne' %}

Along with these features, I refactored already existing code to be cleaner and more efficient with an emphasis on reusability for future projects (an intersetingly cathartic exercise). Through this, I learnt to appreciate the freedom afforded by the Vulkan API in designing a renderer which fitted my style. A bonus of learning to use the API is that I gained a much more intimate knowledge of the render pipeline, essentially doing much of the work that OpenGL does in the background for you.

My aim is to use this renderer as a basis for and exercise in software architecture: building on my experice writing a game engine and making my own, with the intent of making a sci-fi theme game  with gameplay similar to Star Fox 64.

Future features of the renderer will include:
- more post processing effects (HDR lighting, bloom and blur)
- a more complex material system to better manage descriptors
- improved shadows (greater diversity of shadow maps, cascading shadows)
