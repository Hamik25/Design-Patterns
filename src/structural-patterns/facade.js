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