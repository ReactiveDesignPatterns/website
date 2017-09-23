---
layout: page
---
# Resource loan

_“Give a client exclusive transient access to a scarce resource without transferring ownership.”_


A variant of the [Resource Loan](resource-loan.html) pattern is widely used in
non-Reactive systems, the most prominent example being that of a database
connection pool. Database access is represented by a connection object via
which arbitrary operations can be performed. The creation of connections is
expensive, and their number is limited; therefore, a connection is not owned by
client code but is taken from a pool before performing an operation and put
back afterward. The connection pool is responsible for managing the lifecycle
of its connections, and client code obtains temporary permission to use them.
Failures in this scenario are communicated to the client, but their effect on
the connection in question is handled by the pool—the pool owns and supervises
the connections.

In a Reactive system, you strive to minimize contention as well as the need for
coordination: hence, the classic database connection pool usually only features
as an internal implementation detail of a component whose data storage is
realized by means of a relational database. But you will frequently encounter
the use of scarce resources in your systems, and the same philosophy that
drives the connection pool abstraction is useful in Reactive system design as
well.


[back to the list](../categories.html)
