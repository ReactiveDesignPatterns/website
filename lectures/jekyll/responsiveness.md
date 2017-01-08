---
layout: page
title: Responsiveess
video: /videos/Courseware/W06/Week7-3.mp4
---

In this final lecture we discuss the means and tradeoffs involved in achieving the responsiveness that is required of our systems. In particular, we cover:

* exploiting parallelism to reduce response latency, potentially at the cost of more resource usage
* installing circuit breakers between Actors or services in order to protect the client from service outages as well as protecting the service from being overloaded
* bulk-heading different parts of the system by assigning separate resources, for example different thread pools
* the tradeoffs between detecting failures and maintaining very low response latencies

In summary, we reach the conclusion that message-driven systems can be scaled vertically and horizontally, and that responsiveness requires both resilience and elasticity.
