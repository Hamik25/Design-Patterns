# Abstract Factory

---

#### 

#### Definition

Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

#### 

#### Summary

An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

Suppose we have two Abstract Factories whose task it is to create page controls, such as, buttons, textboxes, radio buttons and listboxes. One is the Light Factory which creates controls that are white and other the Dark Factory which creates controls that are black. Both Factories creates the same types of controls, but they differ in color, which is their common theme. This is an example of the Abstract Factory pattern.

Over time the Abstract Factory and Factory Method patterns have merged into more general pattern called Factory. A Factory is a simply an object that creates other objects.

You may be wondering why you would want to leave the responsibility of the construction of objects to others rather than simply calling a constructor function with the new keyword directly. The reason is that constructor functions are limited in their control over the overall creation process and sometimes you will need over control to a factory that has broader knowledge.

This includes scenarios in which the creation process involves object caching, sharing or re-using, complex logic, or applications that maintain object and type counts, and objects that interact with different resources or devices. If Your application needs more control over the object creation process, consider using a Factory.![](/assets/abstract-factory.png)

#### Participants

**Abstract Factory **-- not used in JavaScript

* declares an interface for creating products

**Factory **-- in sample code: **EmployeeFactory, VendorFactory**

* a factory object that 'manufactures' new products
* the create\(\) method returns new product

**Products **-- in sample code: **Employee, Vendor**

* the product instances being created by the factory

**AbstractProduct **-- not used in JavaScript

* declares an interface for the products that are being created

#### 

#### Sample code in JavaScript

JavaScript does not support class-based inheritance therefore the abstract classes as depicted in the diagram are not used in the JavaScript sample. Abstract classes and interfaces enforce consistent interfaces in delivered classes. In JavaScript we must ensure this consistency ourselves by making sure that each 'Concrete' object has the same interface definition \(i.e. properties and methods\) as the others.

In the example we have two Concrete Factories: EmployeeFactory and VendorFactory. The first one creates Employee instances, the second one Vendor instances. Both products are person types \(with the same interface\) which allows the client to treat them the same. An array with two employees and two vendors is created. Each person is then asked to say what aand who they are.

The log function is helper which collects and displays results.



```js
function Employee(name) {
    this.name = name;

    this.say = function() {
        log.add("I am employee " + name);
    };
}

function EmployeeFactory() {

    this.create = function(name) {
        return new Employee(name); 
    };
}

function Vendor(name) {
    this.name = name;

    this.say = function() {
        log.add("I am vendor " + name);
    };
}

function VendorFactory() {

    this.create = function(name) {
        return new Vendor(name);
    };
}

// log helper
var log = (function(){
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    };
})();

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

    log.show();
}
```



