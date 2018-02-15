# Builder

---

#### 

#### Definition

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

#### 

#### Summary

The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.

The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects \(another GoF design pattern\) because the procedures involved are often repetitive and complex.

Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together \(note: fluent interfaces are implementation of the Chaining Pattern as presented in the Modern patterns section\).

![](/assets/builder.png)

#### Participants

The objects participating in this pattern are:

**Director **-- in sample code: **Shop**

* constructs products by using the Builder's multistep interface

**Builder **-- not used in JavaScript

* declares a multistep interface for creating a complex product

**ConcreteBuilder **-- in sample code: **CarBuilder, TruckBuilder**

* implements the multistep Builder interface
* maintains the product through the assembly process
* offers the ability to retrieve the newly created product

**Products **-- in sample code: **Car, Truck**

* represents the complex objects being assembled

#### 

#### Sample code in JavaScript

The AbstractBuilder is not used because JavaScript does not support abstract classes. However, the different Builders must implement the same multistep interface for the Director to be able to step through the assembly process.

The JavaScript code has a Shop \(the Director\) and two builder objects: CarBuilder and TruckBuilder. The Shop's construct method accepts a Builder instance which it then takes through a series of assembly steps: step1 and step2. The Builder's get method returns the newly assembled products \(Car objects and Truck objects\).

The client has control over the actual object construction process by offering different builders to the Shop.

The log function is a helper which collects and displays results.

```js
// Director
function Shop() {
    this.construct = function(builder) {
        builder.step1().step2();
        return builder.get();
    }
}

// Car Builder constructor
function CarBuilder() {
    this.car = null;

    this.step1 = function() {
        this.car = new Car();
        return this;
    };

    this.step2 = function() {
        this.car.addParts(4);
        return this;
    };

    this.get = function() {
        return this.car;
    };
}

// Truck Builder constructor
function TruckBuilder() {
    this.truck = null;

    this.step1 = function() {
        this.truck = new Truck();
        return this;
    };

    this.step2 = function() {
        this.truck.addParts(2);
        return this;
    };

    this.get = function() {
        return this.truck;
    };
}

// Product constructor
function Product() {
  this.doors = 0;
}

Product.prototype.addParts = function(count) {
  this.doors = count;
}

Product.prototype.say = function() {
  log.add("I am a " + this.doors + "-door car");
}

// Car Product constructor
function Car() {}
Car.prototype =  Object.create(Product.prototype);

// Truck Product constructor
function Truck() {}
Truck.prototype = Object.create(Product.prototype);

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run() {
    // Director instance
    var shop = new Shop();

    // Builder instances
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();

    // Director construct calls
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);

    // Products Instances
    car.say();
    truck.say();

    log.show();
}
```



