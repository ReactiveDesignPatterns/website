---
layout: page
title: Failure Handling with Actors
video: /videos/Courseware/W06/Week6-1.mp4
---

This lecture treats the most important characteristic of Actors, namely how they support handling failures in a principled fashion. Due to their encapsulation, failure is contained within the compartment of the system that is represented by each Actor. We therefore cover:

* how failure is communicated to a supervisor Actor in order to react to it
* how the supervisor decides its reaction
* helpful utilities offered by Akka for formulating supervision strategies
* how the various reactions (resume/restart/stop) affect the failed Actor
* how a restarted Actor can react to this event

We summarize these learnings by drawing a diagram of the Actor lifecycle.
