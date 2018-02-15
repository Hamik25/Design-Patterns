# Factory

---

#### 

#### Definition

Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory pattern lets a class defer instantiation to subclasses.

#### 

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

* the product being created

#### 

#### Sample code in JavaScript

In this JavaScript example the Factory object creates four different types of hero. Each hero type has a different magic power. The createHero method is the actual Factory Method. The client instructs the factory what type of hero to create by passing a type argument into Factory Method.

The AbstractProduct in the diagram is not implemented because JavaScript does not support abstract classes or interfaces. However, we still need to ensure that all heroes types have the same interface \(properties and methods\) .

Four different heroes types are crated: all are stored in the same array. Each hero is asked to say what they are and their magic power.

The log function is a helper which collects and displays results.

```js
// Factory
function HeroFactory() {
	this.createHero = function(type) {
	var hero;
	
	switch(type) {
		case 'IRON_MAN':
			hero = new IronMan('Iron Man', 'Iron Costume');
			break;
		case 'SPIDER_MAN':
			hero = new SpiderMan('Spider Man', 'Spider Power');
			break;
		case 'HULK':
			hero = new Hulk('Hulk', 'Power of my muscles');
			break;
		case 'TOR':
			hero = new Tor('Tor', 'My Hammer');
			break;
	}
	
	return hero;
	}
};

// Hero constructor
function Hero(name, magicPower) {
	this.name = name;
	this.magicPower = magicPower;
};

Hero.prototype.sayMagicPower = function() {
	return "I'm a " + this.name + " and my magic power is a " + this.magicPower;
};

// IronMan constructor
function IronMan() {
	Hero.apply(this, arguments);
};
IronMan.prototype = Object.create(Hero.prototype);

// SpiderMan constructor
function SpiderMan() {
	Hero.apply(this, arguments);
};
SpiderMan.prototype = Object.create(Hero.prototype);

// Hulk constructor
function Hulk() {
	Hero.apply(this, arguments);
};
Hulk.prototype = Object.create(Hero.prototype);

// Tor constructor
function Tor() {
	Hero.apply(this, arguments);
};
Tor.prototype = Object.create(Hero.prototype);

// Log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 
// Factory Client
function heroStore() {
	// heroes inctances
	var heroes = [];
	// HeroFactory instance
	var heroFactory = new HeroFactory();

	heroes.push(heroFactory.createHero('IRON_MAN'));
	heroes.push(heroFactory.createHero('SPIDER_MAN'));
	heroes.push(heroFactory.createHero('HULK'));
	heroes.push(heroFactory.createHero('TOR'));

	for (var i = 0, len = heroes.length; i < len; i++) {
        log.add(heroes[i].sayMagicPower());
    }
 
    log.show();
};
```



