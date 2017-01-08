---
layout: page
title: Actors are Distributed (Part 1)
video: /videos/Courseware/W06/Week6-4a.mp4
---

In this lecture we deploy Actors on a cluster of nodes, noticing that this does not change the programming model at all: Actors come fully prepared for remote interaction. This is enabled by hiding all their functionality behind a handle that only allows messages to be sent, the `ActorRef` in Akka. We cover:

* the impact of remote communication compared to local messaging
* `ActorPath` and its relationship with `ActorRef`
* the definition of what constitutes an Akka Cluster
* how to start up a cluster and run Actors on it
* routing messages to Actors elsewhere on the cluster
* deploying Actors from one node to the other

Cluster usage is demonstrated on the example of the link checker developed during [an earlier lecture](design.html).
