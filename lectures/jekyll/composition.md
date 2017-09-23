---
layout: page
title: Actor Composition
video: /videos/Courseware/W07/Week7-1.mp4
---

This lecture discusses the structurally typed nature of Actors as implemented in untyped Akka. In particular, you learn:

* that the type of an Actor is defined by the set of messages it accepts
* that the type of the `ActorRef` can fundamentally not express in which state the Actor currently is
* how these liberties allow generic transformations of message streams to be implemented, for example changing message rate or timing
* how the frequently encountered request–response pattern is encoded directly in Akka’s `ask` operator
* that including reply-to addresses allows dynamic composition structures
* how to implement non-blocking result aggregation using Futures
* how to delegate risky operations
* how to adapt Actor protocols by placing a façade between sender and receiver
