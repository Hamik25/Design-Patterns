# Prototype

---

#### Definition

Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.

#### 

#### Summary

The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object. The Prototype pattern is also referred to as the Properties pattern.

An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default that are copied over into a newly created business object.

Classical languages rarely use the Prototype pattern, but JavaScript being a prototypical language uses this pattern in the construction of new objects and their prototypes.

![](/assets/prototype.png)

#### Participants

The objects participating in this pattern are:

**Client **-- in sample code: the run\(\) function

* creates a new objects by asking a prototype to clone itself

**Prototype **-- in sample code: **RubicsCubePrototype**

* create an interfaces to clone itself

**Clones **-- in sample code: **RubicsCube**

* the cloned objects that are being created

#### 

#### Sample code in JavaScript

In the sample code we have a RubicsCubePrototype object that clones objects given a prototype object. Calling the clone method will generate a new prototype object for the RubicsCube object with its property values initialized with the prototype values.

This is the classical implementation of the Prototype pattern, but in JavaScript can do this far more effectively using its built-in prototype facility.

```js
// Prototype object
RubicsCubePrototype = (function() {

    return {
        clone: function() {
            return {
                sides: 6,
                getInfo: function() {
                    return "Rubic's cube have a " + this.sides + " sides, color " + this.color + " and model " + this.model;
                }
            };
        }
    }
})();

// RubicsCube constructor
RubicsCube = function(model, color) {

    this.model = model;
    this.color = color;
};

// Create new prototype objects of RubicsCube constructor by using clone method
RubicsCube.prototype = RubicsCubePrototype.clone();

// Log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run() {
    var rubicsCube = new RubicsCube('3x3', 'multicolor');

    log.add(rubicsCube.getInfo());
    log.show();
}
```



