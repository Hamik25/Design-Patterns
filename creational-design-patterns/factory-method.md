# Factory

---

#### 

#### Definition

Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory pattern lets a class defer instantiation to subclasses.

#### Summary

A Factory pattern creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory pattern allows the client to delegate object creation while still retaining control over which type to instantiate.

The key objective if the Factory pattern is extensibility. Factory pattern are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but as same time have many characteristics\(i.e. methods and properties\) in common. An example would be a collection of documents with a mix of XML documents, PDF documents, and RTF documents.

![](/assets/ice_screenshot_20180215-182231.png)

