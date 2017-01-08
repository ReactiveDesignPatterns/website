---
layout: page
title: Persistent Actor State
video: /videos/Courseware/W06/Week6-3.mp4
---

This lecture treats the storage of persistent state for Actors. It starts out from a comparison between in-place updates and an append-only event log (event-sourcing). In particular we cover:

* the performance characteristics of these options
* how snapshots can be used to shorten recovery times for event-sourcing
* the tradeoff between throughput and consistency when not waiting for events to be persisted before modifying the Actor state
* how to implement truly reliable delivery
* the impossibility of exactly-once delivery in general, but how to implement effectively exactly-once semantics using idempotent operations

We conclude this lecture by discussing when and how to perform non-idempotent external effects from your Actors.
