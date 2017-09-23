---
layout: page
---
# Saga

_“Divide long-lived, distributed transactions into quick local ones with compensating actions for recovery.”_

The term saga was coined by Hector Garcia-Molina.  His paper describes a scheme
for breaking up long-lived business transactions in order to shorten the time
period during which databases need to hold locks—these locks are needed to
ensure atomicity and consistency of the transaction, the downside of which is
that other transactions touching the same data cannot proceed concurrently.

In a distributed system, you need to break up transactions involving multiple
participants for other reasons: obtaining a shared lock is an expensive
operation that can even be impossible in the face of certain failures like
network partitions. As we discussed in chapter 8, the key to scalability and
loose coupling is to consider each component an island of delimited
consistency. But how do you model business transactions that require inputs
from multiple components while also effecting modifications to multiple
components? It turns out the research topic of sagas provides an effective,
robust solution for many use cases.


[back to the list](../categories.html)
