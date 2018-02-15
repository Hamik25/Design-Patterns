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

// Log helper
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
