---
layout: page
title: Supervision revisited
video: /videos/Courseware/W08/Supervision_revisited_V2.mp4
---

This lecture discusses how supervision in Akka Typed differs from the
previously discussed supervision implemented in untyped Akka actors:

- no more paused actors
- no private state leaks by potentially non-serializable exception objects
- failure-stop model as foreseen by the Actor Model

The interesting part is that supervision is implemented as a purely functional
behavior decorator, show-casing how libraries can add powerful capabilities to
the Akka Typed system.
