# Design Patterns

The short articles about Design Patterns solutions and some examples.

## Categories Of Design Pattern

A glossary from the well-known design book, Domain-Driven Terms, rightly states that.  
A design pattern names, abstracts, and identifies the key aspects of a common design structure that make it useful for creating a reusable object-oriented design. The design pattern identifies the participating classes and their instances, their roles and collaborations, and the distribution of responsibilities.

Each design pattern focuses on a particular object-oriented design problem or issue. It describes when it applies, whether or not it can be applied in view of other design constraints, and the consequences and trade-offs of its use. Since we must eventually implement our designs, a design pattern also provides sample ... code to illustrate an implementation.

Although design patterns describe object-oriented designs, they are based on practical solutions that have been implemented in mainstream object-oriented programming languages ...

Design patterns can be broken down into a number of different categories. In this section we’ll review three of these categories and briefly mention a few examples of the patterns that fall into these categories before exploring specific ones in more detail.

### Creational Design Patterns

Creational design patterns focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. The basic approach to object creation might otherwise lead to added complexity in a project whilst these patterns aim to solve this problem by controlling the creation process.

Some of the patterns that fall under this category are: Constructor, Factory, Abstract, Prototype, Singleton and Builder.

| Category | Name | Description |
| :--- | :--- | :--- |
| Creational | `Abstract Factory` | Creates an instance of several families of classes |
| Creational | `Builder` | Separates object construction from its representation |
| Creational | `Factory Method` | Creates an instance of several derived classes |
| Creational | `Prototype` | A fully initialized instance to be copied or cloned |
| Creational | `Singleton` | A class of which only a single instance can exist |

### Structural Design Patterns

Structural patterns are concerned with object composition and typically identify simple ways to realize relationships between different objects. They help ensure that when one part of a system changes, the entire structure of the system doesn't need to do the same. They also assist in recasting parts of the system which don't fit a particular purpose into those that do.

Patterns that fall under this category include: Decorator, Facade, Flyweight, Adapter and Proxy.

| Category | Name | Description |
| :--- | :--- | :--- |
| Structural | `Adapter` | Match interfaces of different classes |
| Structural | `Bridge` | Separates an object’s interface from its implementation |
| Structural | `Composite` | A tree structure of simple and composite objects |
| Structural | `Decorator` | Add responsibilities to objects dynamically |
| Structural | `Facade` | A single class that represents an entire subsystem |
| Structural | `Flyweight` | A fine-grained instance used for efficient sharing |
| Structural | `Proxy` | An object representing another object |

### Behavioral Design Patterns

Behavioral patterns focus on improving or streamlining the communication between disparate objects in a system.

Some behavioral patterns include: Iterator, Mediator, Observer and Visitor.

| Category | Name | Description |
| :--- | :--- | :--- |
| Behavioral | `Chain of Resp.` | A way of passing a request between a chain of objects |
| Behavioral | `Command` | Encapsulate a command request as an object |
| Behavioral | `Interpreter` | A way to include language elements in a program |
| Behavioral | `Iterator` | Sequentially access the elements of a collection |
| Behavioral | `Mediator` | Defines simplified communication between classes |
| Behavioral | `Memento` | Capture and restore an object's internal state |
| Behavioral | `Observer` | A way of notifying change to a number of classes |
| Behavioral | `State` | Alter an object's behavior when its state changes |
| Behavioral | `Strategy` | Encapsulates an algorithm inside a class |
| Behavioral | `Template Method` | Defer the exact steps of an algorithm to a subclass |
| Behavioral | `Visitor` | Defines a new operation to a class without change |



