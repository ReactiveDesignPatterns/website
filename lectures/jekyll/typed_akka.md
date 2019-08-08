---
layout: page
title: Protocols in Akka Typed
video: /videos/Courseware/W08/Protocols_in_Akka_Typed_V1.mp4
---

Akka Typed is an evolution of the untyped Akka actor implementation to support
channel types: most importantly, the `ActorRef` now is parameterized with the
type of messages it accepts. This has several other consequences that we
discuss in this lecture.

The use of more precise types within actor interactions is then demonstrated on
a small example, including how to set up a typed actor system and how to handle
fully typed responses, i.e. continuations of the protocol throughout the full
interchange.
