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