---
layout: page
---
# Multiple-master: Conflict-free replicated data types

_“Keep multiple copies of a service running in different locations, accept modifications everywhere, and disseminate all modifications among them.”_

In the [previous pattern](./conflict-detection-and-resolution.html), you
achieved perfect availability of the batch service’s storage component—where
perfect means “it works as long as one replica is reachable”—at the cost of
either losing updates or having to care about manual conflict resolution. You
can improve on this even further, but unfortunately at another cost: it is not
possible to avoid conflicts while maintaining perfect availability without
restricting the data types that can be expressed.


[back to the list](../categories.html)
