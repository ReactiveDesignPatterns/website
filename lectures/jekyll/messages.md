---
layout: page
title: Message Processing Semantics
video: /videos/Courseware/W05/Week5-3.mp4
---

In this lecture we take a deeper look at how Actors function. This is fundamentally defined by how they are processing messages. After revisiting their encapsulated nature we cover:

* in how far Actor behavior runs concurrently
* the execution order of internal logic
* the difference in message ordering guarantees between Akka and Erlang
* in how far message delivery is guaranteed and how to improve on that

These aspects are demonstrated on the bank account transfer process that was used in the first lecture to demonstrate race conditions and deadlocks. We conclude by enumerating the key effects of focusing on message-passing.
