---
layout: page
---
# Ask

_“Delegate the handling of a response to a dedicated ephemeral component.”_


This pattern can be arrived at by two trains of thought:

* In a purely message-driven system such as the Actor model, it frequently occurs that after performing a request-response cycle with another Actor, the current business process needs to continue with further steps. Toward this end, the Actor could keep a map of correlation IDs and associated continuation information (such as the details of the ongoing business transaction started by an earlier received message), or it could spawn an ephemeral child Actor, give its address as the return address for the response, and thereby delegate the continuation of the process. The latter is the approach described in Gul Agha’s thesis:
  it is the Actor way of thinking. Because this pattern occurs frequently, it may receive special support from libraries or frameworks.

* Traditional RPC systems are exclusively based on the premise of request-response calls, pretending the same semantics as a local procedure call. Their synchronous presentation results in distributed systems coupled in undesirable ways, as discussed throughout the first part of this book. In order to decouple caller and callee, the locally returned type is changed from a strict result value to a Future—a container for a result value that may arrive later. The continuation of the caller’s business process then needs to be lifted into the Future as well, using transformation combinators to perform the successive steps. This Future is an ephemeral component whose purpose is the reception of the eventual response and the initiation of follow-up actions, exactly like the child Actor in the previous bullet point.


[back to the list](../categories.html)
