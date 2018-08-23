# Facade

---

#### Definition

Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

#### Summary

The Facade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

The intent if the Facade is provide high-level interface \(properties and methods\) that makes a subsystem or toolkit easy to use for the client.

On the server, in a multi-layer web application you frequently have a presentation layer which is a client ti a service layer. Communication between these two layers takes place via a well-defined API. This API, or Facade, hides the complexities of the business objects and their interactions from the presentation layer.

Another area Facades are used is in refactoring. Suppose you have a confusing or messy set of legacy objects that the client should not be concerned about. You can hide this code behind a Facade. The Facade exposes only what is necessary and presents a cleaner and easy-to-use interface.

Facade are frequently combined with other design patterns. Facades themselves are often implemented as singleton factories.![](/assets/facade.png)

#### Participants

The objects participating in this pattern are:

**Facade **-- in sample code: **Mortgage**

* knows which subsystems are responsible for a request
* delegates client request to appropriate subsystem objects

**Sub Systems **-- in sample code: **Bank, Credit, Background**

* implements and performs specialized subsystem functionality
* have no knowledge of  or reference to the facade



#### Sample code in JavaScript

The Mortgage object is the Facade in the sample code. It presents a simple interface to the client with only a single method: applyFor. Eut underneath this simple API lies considerable complexity.

The applicant's name is passed into the Mortgage constructor function. Then the applyFor method is called with the requested loan amount. Internally, this method uses services from 3 separate subsystems that are complex and possibly take some time to process: they are Bank, Credit and Background.

Based on several criteria \(bank statements, credit reports and criminal background\) the applicant is either accepted or denied for the requested loan.

```js
// Component
var User = function(name) {
    this.name = name;
};

User.prototype.say = function() {
    log.add('User: ' + this.name);
};

// Decorator
var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name; // ensures interface stays the same
    this.street = street;
    this.city = city;
};

DecoratedUser.prototype.say = function() {
    log.add('Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city);
};

// Logging helper
var log = (function() {
    var log = '';

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ''; }
    }
})();

// Client
function run() {
    // Component instance
    var user = new User("David");
    user.say();

    var decoratedUser = new DecoratedUser(user, "Abovyan", "Yervan");
    decoratedUser.say();

    log.show();
};
```



