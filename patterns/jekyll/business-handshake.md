---
layout: page
---
# Business handshake

_“Include identifying and/or sequencing information in the message, and keep retrying until confirmation is received.”_

While discussing the [Saga pattern](saga.html), we made the implicit assumption that
communication between the saga and the affected components is reliable. We
pictured a group of people standing in the same office and discussing the
process without external disturbances. This is a useful way to begin, because
it allows you to focus on the essential parts of a conversation; but we know
that life does not always work like that—in particular in distributed systems,
where messages can be lost or delayed due to unforeseeable, inexorable
subsystem failures.

Fortunately, we can treat the two concerns on separate levels: imagining that
the conversation occurs in a busy, noisy office does not invalidate the basic
structure of the business process we are modeling. All that is needed is to
deliver every message more carefully, transmitting it again if it is
overshadowed by some other event. This second level is what the Business
Handshake pattern is all about.


[back to the list](../categories.html)
