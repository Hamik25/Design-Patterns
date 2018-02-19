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