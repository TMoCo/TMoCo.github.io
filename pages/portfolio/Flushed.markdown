---
layout: portfolio_entry
title:  "Flushed!"
titlePicture: "/assets/Flushed.png"
permalink: "/Flushed/"
repo: "Flushed"
order: 3
excerpt: Play as a rubber ducky that has been flushed down the toilet, collect jewellery and avoid obstacles for a high score.
---
<!-- main content -->
{% include captioned_image.html src='assets/FlushedMenu.png' alt='Flushed main menu' caption='Flushed! main menu' %}

I developed Flushed! over half a week with the aim of re-acquainting myself with the Unity game engine's features, which I had last used for my [undergraduate thesis][proteinVisualiserLink].

I wanted to make a game one would typically play on their phone for about five minutes while sitting on the toilet (hence the theme) like Temple Run or Subway Surfers.
The aim of the game is as follows: you play as an unfortunate rubber ducky that has just been flushed away and have to go as far down the plumbing as you can. Using the left and right arrow keys, avoid oncoming obstacles and try to collect jewellery to improve your score. Be mindful that the higher your score, the faster you slide and the harder it is to avoid oncoming obstacles.

The pipes are managed by a queue-like system as pipe segments at the top are pushed to the back when they pass by the rubber duck. I also implemented a basic power up system with extensibility in mind for later additions (current power ups last for thirty seconds and are: speed reduction and double points).

{% include captioned_image.html src='assets/Flushed.gif' alt='Flushed gif' caption='Flushed! in action' %}

I really enjoyed making this little game and it proved to be valuable preparation for making [Can't wait][CantWait].

[proteinVisualiserLink]: {{site.url}}/Unity_Protein_Visualiser/
[CantWait]: {{site.url}}/Cant_Wait/
