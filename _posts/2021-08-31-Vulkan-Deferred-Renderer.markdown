---
layout: post
title:  "Vulkan Deferred Renderer"
titlePicture:  "/assets/Suzanne.png"
category: portfolio
permalink: "/Vulkan_Deferred_Renderer/"
repo: "VulkanRenderer"
---

<!--end-excerpt-->

The Vulkan deferred renderer was originally a piece of coursework made for my master's high performance graphics module.

![gbuffer]({{site.url}}/assets/composite_gbuffer.png)
*Composite view of the gbuffer, clockwise: albedo, position, ao-metallic-roughness, normals*

I really enjoyed writing the renderer, but couldn't escape the feeling that I could improve on it and add more features to it. Consequently, over the summer I implemented the following features:
- a skybox
- shadow mapping (from a point light)
- physically based shading

![suzanne]({{site.url}}/assets/Suzanne.png)
*Physically based Suzanne*

Along with these features, I refactored already existing code to be cleaner and more efficient with an emphasis on reusability for future projects (an intersetingly cathartic exercise). Through this, I learnt to appreciate the freedom afforded by the Vulkan API in designing a renderer which fitted my style. A bonus of learning to use the API is that I gained a much more intimate knowledge of the render pipeline, essentially doing much of the work that OpenGL does in the background for you.

My aim is to use this renderer as a basis for and exercise in software architecture: building on my experice writing a game engine and making my own, with the intent of making a sci-fi theme game  with gameplay similar to Star Fox 64.

Future features of the renderer will include:
- more post processing effects (HDR lighting, bloom and blur)
- a more complex material system to better manage descriptors
- improved shadows (greater diversity of shadow maps, cascading shadows)
