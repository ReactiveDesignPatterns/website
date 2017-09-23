---
layout: page
---
# Domain object

_“Separate the business domain logic from communication and state management.”_

In chapter 6, we discuss the principle of divide and conquer; and in section
12.1, you learned how to apply this in the form of the Simple Component
pattern. The resulting components have a clearly defined responsibility: they
do one thing and do it in full. Often, this involves maintaining state that
persists between invocations of these components. Although it may be intuitive
to identify a component with its state—for example, by saying that a shopping
cart in its entirety is implemented by an actor—this has notable downsides:

* The business logic becomes entangled with the communication protocols and with execution concerns.
* The only available mode of testing this component is through asynchronous integration tests—the implemented business behavior is accessible only via the externally defined protocols.

The Domain Object pattern describes how to maintain a clear boundary and
separation between the different concerns of business logic, state management,
and communication. This pattern is intuitively understandable without
additional knowledge, but we highly recommended that you study domain-driven
design,  because it provides more in-depth techniques for defining the
ubiquitous language used within each bounded context. Bounded contexts
typically correspond to components in your hierarchical system decomposition,
and the ubiquitous language is the natural language in which domain experts
describe the business function of the component.


[back to the list](../categories.html)
