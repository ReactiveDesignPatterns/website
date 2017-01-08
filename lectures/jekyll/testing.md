---
layout: page
title: Testing Actor Systems
video: /videos/Courseware/W05/Week5-5.mp4
---

This lecture completes the first walkthrough of how to use Actors by introducing the means for testing them. Due to their encapsulation, testing Actors is approached differently from traditional OO testing—mocks cannot be used to deeply introspect their behavior. We will cover:

* blackbox testing: using messages to stimulate expected responses
* replacing collaborating Actors during tests with Actor stubs
* testing parent–child relationships
* reverse onion testing: Reactive systems are validated in black box tests at increasing granularity, starting from individual Actors and working towards the system roots

After viewing this lecture you will be well-equipped for the first exercise.
