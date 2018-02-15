# Factory

---

#### 

#### Definition

Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory pattern lets a class defer instantiation to subclasses.

#### Summary

A Factory pattern creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory pattern allows the client to delegate object creation while still retaining control over which type to instantiate.

The key objective if the Factory pattern is extensibility. Factory pattern are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but as same time have many characteristics\(i.e. methods and properties\) in common. An example would be a collection of documents with a mix of XML documents, PDF documents, and RTF documents.

![](/assets/factory.png)

#### Participants

The objects participating in this pattern are:

**FactoryClient **-- in sample code: **HeroStore**

* this is the client of the **HeroFactory.**
* request from the **HeroFactory **for getting instance of hero

**SimpleFactory **-- in sample code: **HeroFactory**

* this is the factory wheve we create hero
* it should be the only part of application that refers to create hero classes

**AbstractProduct **-- not used in JavaScript

* declares an interface for products

**Products **-- in sample code: **IronMan, SpiderMan, Hulk, Tor**

* represents the complex objects being assembled



