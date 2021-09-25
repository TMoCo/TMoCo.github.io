---
layout: post
title:  "Vulkan Deferred Renderer"
titlePicture:  "/assets/Suzanne.png"
category: portfolio
permalink: "/Vulkan_Deferred_Renderer/"
---

<!--end-excerpt-->

![suzanne]({{site.url}}/assets/Suzanne.png)

The Vulkan deferred renderer was originally a piece of coursework made for my master's high performance graphics module.\
Over the summer, I revisited this project and added some more features to it:
- a skybox
- shadow mapping
- physically based rendering

I also spent a lot of time refactoring my old code, learning a lot about the Vulkan API in the process and now feel quite comfortable using it.

![gbuffer]({{site.url}}/assets/composite_gbuffer.png)

I plan on developing this project further by:
- building on the deferred rendering by adding more post processing effects (HDR lighting, bloom and blur)
- implementing a material system to manage descriptors
- improve shadows (cascading shadow map)

The aim is to have a minimal rendering system that can be used in a small game engine for a sci-fi game that plays similar to Star Fox 64 and features high-end graphics.

[Link to repository][repo]

[repo]: https://github.com/TMoCo/VulkanRenderer
