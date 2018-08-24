# Flyweight

---

#### Definition

Use sharing to support large numbers of fine-grained objects efficiently.

#### Summary

The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they request the characteristics that are shared with other objects.

Essentially Flyweight is 'object normalization technique' in which common properties are factored out into shared flyweight objects. \(Note: the idea is similar to data model normalization, a process in which the modeler attempts to minimize redundancy\)

An example of the Flyweight pattern is within the JavaScript engine itself which maintains a list of immutable strings that are shared across the application.

Other example include characters and line-styles in a word processor, or 'digit receivers' in a public switched telephone network application. You will find flyweights mostly in utility type applications such as word processors, graphics programs, and network apps; they are less often used in data-driven business type applications.![](/assets/ice_screenshot_20180824-121135.png)

#### Participants

The objects participating in this pattern are:

**Client **-- in sample code: **Computer**

* calls into FlyweightFactory to obtain flyweight object

**FlyweightFactory **-- in sample code: **FlyweightFactory**

* creates and manages flyweight objects
* if requested, and a flyweight does not exist, it will create one
* stores newly created flyweight for future requests

**Flyweight **-- in sample code: **Flyweight**

* maintains intrinsic data to be shared across the application

#### Sample code in JavaScript

In our example code we are building computers. Many models, makes, and processor combinations are common, so these characteristics are factored out and shared by Flyweight objects.

The FlyweightFactory maintains a pool of flyweight objects. When requested for a flyweight object the FlyweightFactory will check if one already exists: if not a new one will be created and stored for future reference. All subsequent requests for that same computer will return the stored flyweight object.

Several different computers are added to ComputerCollection. At the end we have a list of 7 Computer objects that share only 2 Flyweights. These are small savings, but with large datasets the memory savings can be significant.k, Credit and Background.

The log function is a helper which collects and displays results.

```js
// Facade
var Mortgage = function(name) {
    this.name = name;
};

// Method
Mortgage.prototype.applyFor = function(amount) {
    // Access multiple subsystems
    var result = 'approved';

    if (!new Bank().verify(this.name, amount) 
        || !new Credit().get(this.name)
        || !new Background().check(this.name)) {

        result = 'denied';
    }

    return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage.';
};

// Sub system 1
var Bank = function() {
    this.verify = function(name, amount) {
        // Complex logic
        return true;
    };
};

// Sub system 2
var Credit = function() {
    this.get = function(name) {
        // Complex logic
        return true;
    }
};

// Sub  system 3
var Background = function() {
    this.check = function(name) {
        // Complex logic
        return true;
    }
};

// Log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

// Client
function run() {
    var mortgage = new Mortgage('Jhon Templeton');

    log.add(mortgage.applyFor('$100,000'));
    log.show();
};
```



