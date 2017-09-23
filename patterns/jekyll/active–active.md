---
layout: page
---
# Active–active replication

_“Keep multiple copies of a service running in different locations, and perform all modifications at all of them.”_

With multiple-master replication patterns, you achieved resilience for the
storage subsystem of the example batch job processing facility by replicating
it across different locations (data centers, availability zones, and so on).
You saw that you can achieve strong consistency only when implementing a
failover mechanism; both CRDT-based replication and conflict detection avoid
this at the cost of not guaranteeing full consistency. One property of failover
is that it takes some time: first, you need to detect that there is trouble,
and then, you must establish consensus about how to fix it—for example, by
switching to another replica. Both activities require communication and
therefore cannot be completed instantaneously. Where this is not tolerable, you
need a different strategy, but because there is no magic bullet, you must
expect different restrictions.


[back to the list](../categories.html)
