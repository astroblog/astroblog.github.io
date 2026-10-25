---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date | time.Format "2006-01-02" }}
draft: false
description: ""
summary: ""
categories: []
tags: []
---

The {{ replace .File.ContentBaseName "-" " " | title }} is a . . .
Its nickname comes from . . .

<!--more-->
Thus and so, including catalog designations

{{< astroimage
title="{{ replace .File.ContentBaseName "-" " " | title }} (NGC xxx)|(90 min total exposure FXxx nn, 2026)"
   alt="{{ replace .File.ContentBaseName "-" " " | title }} seen using Celestron RASA 8 and ZWO ASI183MC"
   img="xxx.jpg"
   mouseover="xxx_notes.jpg"
   fsbutton="true"
>}}
<br>

what we are seeing here

## There is a lot going on in this section of the sky


## More {{ replace .File.ContentBaseName "-" " " | title }} trivia

- distance and real size
- age
- size and faintness in sky
- constellation and when discovered

## Pareidolia

You may recall that I discussed _pareidolia_
[here](/posts/2025/2025-02-15-skull-and-crossbones-nebula#heres-a-word-you-probably-didnt-know).

## Imaging Details
{{% smalltext %}}
Celestron RASA 8 telescope, ZWO ASI183MC camera, 439 × 30-second exposures stacked together to give 220 minutes of total integration time, captured October 8, 2026 under Bortle 6 skies. Processed using Siril, Syqon and Affinity software.
{{% /smalltext %}}


