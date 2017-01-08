---
layout: page
title: Lifecycle Monitoring and The Error Kernel
video: /videos/Courseware/W05/Week6-2.mp4
---

In this lecture we build upon what we learned about an Actor’s lifecycle and introduce facilities for monitoring it. We then discuss the consequences of hierarchical supervision for the architecture of our system. In particular we cover:

* that the only observable lifecycle transition is termination
* that the inability to communicate cannot be distinguished from failure
* how the DeathWatch API in Akka supports using these facts for writing resilient systems
* how failure affects child Actors and consequently that important state needs to be kept near the root of the hierarchy
* how logging works in Akka and how unhandled messages can be observed


