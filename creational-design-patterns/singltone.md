# Singleton

---

#### Definition

Ensure a class has only one instance and provide a global point of access to it.

#### 

#### Summary

The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

Several other patterns, such as, Factory, Prototype, and Facade are frequently implemented as Singletons when only one instance is needed.

![](/assets/singlton.png)

#### Participants

The objects participating in this pattern are:

**Singleton **-- in sample code: **Singleton**

* defines getInstance\(\) which returns the same instance.
* responsible for creating and managing the instance object.

#### 

#### Sample code in JavaScript

The Singleton object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it doesn't have a name.

The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world.

The getInstance method demonstrates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

```js
// Singleton 
var Singleton = (function() {
	// Instance stores a referance to the Singleton
	var instance;

	function init() {
		// Private methods and properties.
		function privateMethod() {
			return "I'm a private method.";
		};

		var privateProperty = "I'm a private property.";
		var privateRandomNumber = Math.random();

		return {
			// Public methods and properties.
			publicMethod: function() {
				return "I'm a public method.";
			},
			publicProperty: "I'm a public property.",
			// Accessor to private method
			getRandomNumber: function() {
				return privateRandomNumber;
			}
		}
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	}
})();

// Log helper
var log = (function () {
	var log = "";

	return {
		add: function (msg) { log += msg + "\n"; },
		show: function () { console.log(log); log = ""; }
	}
})();

function run() {

	var singleA = Singleton.getInstance();
	var singleB = Singleton.getInstance();

	log.add(singleA.getRandomNumber());
	log.add(singleB.getRandomNumber());

	log.show();
}
```



