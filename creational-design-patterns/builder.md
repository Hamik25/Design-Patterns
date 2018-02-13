# Builder

---

#### Definition

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

#### Summary

The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.

The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects \(another GoF design pattern\) because the procedures involved are often repetitive and complex.

Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together \(note: fluent interfaces are implementation of the Chaining Pattern as presented in the Modern patterns section\).



