---
title: How to print crisp black on Brother thermal label printers
---
While working on CMCM I discovered my Brother thermal label printer does **not** use the K in CMYK; pure K results in fuzzy dithered edges.

Instead it seems to respect 0 values in RGB (specifically I used Grey/8 mode in Affinity)
