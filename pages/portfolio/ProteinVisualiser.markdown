---
layout: portfolio_entry
title:  "Unity Protein Visualiser"
titlePicture:  "/assets/Ubiquitin.png"
permalink: "/Unity_Protein_Visualiser/"
repo: "ProteinVisualiser"
order: 1
excerpt: Exploring the application of game technologies in research, I built a protein visualiser in Unity.
---
<!-- main content -->
{% include captioned_image.html src='assets/Ubiquitin.png' alt='Ubiquitin' caption='Ubiquitin protein' %}

My third year thesis was an individual project exploring the application of game technologies to a field of research, in my case biochemistry, and producing exploratory software showcasing a possible use.

I dedicated the initial phase of the project to researching the field to understand core concepts, how modern research tools work, and previous applications of game technologies. To focus my research, I also interviewed biochemistry researchers from the university to understand what were the most useful tools and features they used. As a result, I chose to implement a protein visualiser using the Unity game engine.

The application provides some of the core functionalities expected from standard molecular visualisers such as [VMD][vmd]:
- Load protein data from .pdb files (from the [Protein Data Bank][pdb]) and .dssp files (protein secondary structure data)
- Provide a selection of representations for viewing loaded molecules
- The ability to select specific atoms/amino acids/primary and secondary structures, and choose different representations for them

{% include youtube_video.html link='https://youtube.com/embed/Iee6OlouwmY' alt='video presentation' caption='Protein visualiser presentation' %}

The pandemic struck in the middle of my project and impacted largely on its final outcome. The visualiser should have supported virtual reality, which I could no longer implement as I do not have a personal VR setup. This was mitigated by my use of version control software as I could set aside the VR development branch at minimal cost.

{% include captioned_image.html src='assets/VirtualProtein1.gif' alt='Loading protein from disk' caption='Loading ubiquitin from disk' %}

I really enjoyed working on this project, getting to learn about a completely new subject was stimulating, especially such a vast one. As a result, I gained confidence in my skills as an independent researcher, developer and project manager. I managed to produce a protein visualiser able to load protein data from standard file formats and to create custom protein visual representations for which I was awarded a mark of **76%**.

[pdb]:https://www.rcsb.org
[vmd]:https://www.ks.uiuc.edu/Research/vmd/
