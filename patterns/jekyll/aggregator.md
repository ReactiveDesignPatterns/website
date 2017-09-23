---
layout: page
---
# Aggregator

_“Create an ephemeral component if multiple service responses are needed to compute a service call’s result.”_

We have introduced the [Ask pattern](ask-pattern.html) for the case of requiring a request-response
cycle before a service call can be answered. There are cases, though, where a
larger number of these cycles need to be completed, and none of the requests
depend on the responses of the others—in other words, the request-response
cycles can be made in parallel. Disregarding this opportunity for parallelism
means prolonging the time until the overall response can be sent back to the
client, thus leaving an opportunity for latency reduction unused.


[back to the list](../categories.html)
