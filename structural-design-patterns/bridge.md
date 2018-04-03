# Bridge

---

#### Definition

Decouple an abstraction from its implementation so that the two can vary  independently.

#### Summary

The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two level of abstraction.     It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

An example if Bridge pattern is an application \(the client\) and a database driver \(the service\). The application writers to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each databases vendor \(SQL Server, MySQL, Oracle, etc.\)

The Bridge pattern is a great pattern for driver development but it is really seen in JavaScript.

