---
layout: page
title: Eventual Consistency
video: /videos/Courseware/W06/Week6-5.mp4
---

This lecture takes note of the fact that all communication in a distributed system takes time—there is no instantaneous understanding of what a remote component is currently doing. We discuss this starting out from locally implemented strong consistency:

* by removing the blocking waiting for synchronization we see how consistency is weakened
* we discuss how an Actor is an island of consistency in a sea of inconsistency
* on the example of the Akka Cluster’s member state handling we demonstrate the function and value of CRDTs (conflict-free replicated data types)
