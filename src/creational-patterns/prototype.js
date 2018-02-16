// Prototype object
RubicsCubePrototype = {
	clone: function() {
		return {
			sides: 6,
			getInfo: function() {
				return "Rubic's cube have a " + this.sides + " sides, color " + this.color + " and model " + this.model;
			}
		};
	}
};

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