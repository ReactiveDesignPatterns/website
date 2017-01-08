---
layout: page
title: Designing Actor Systems
video: /videos/Courseware/W05/Week5-4.mp4
---

In this lecture we build an Actor-based link checker application in which multiple actors collaborate. On this example we see how:

* to split up the overall task into manageable subtasks
* to consider the flow of information through an Actor system
* to incorporate non-Actor tools and libraries that offer blocking or Future-based APIs
* to install and handle timeouts, guarding against runaway processes

Along this journey we find ourselves considering the interplay between Actor code and other concurrency abstractions, in particular considering where we must be careful so that the Actor encapsulation is not broken. We also see how the use of immutable data structures helps avoid mistakes in this regard.
