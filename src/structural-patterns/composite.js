// Node
var Node = function(name) {
	this.children = [];
	this.name = name;
};

// Add Method
Node.prototype.add = function(child) {
	this.children.push(child);
};

// Remove Method
Node.prototype.remove = function(child) {
	var length = this.children.length;
	for (var i = 0; i < length; i++) {
		if (this.children[i] === child) {
			this.children.splice(i, 1);
			return;
		}
	}
};

// Get Child Method
Node.prototype.getChild = function(i) {
	return this.children[i];
};

// Has Child Method
Node.prototype.hasChiled = function() {
	return this.children.length > 0;
};

// Recursively traverse a sub tree
function traverse(indent, node) {
	var length = node.children.length;
	log.add(Array(indent++).join('--') + node.name);

	for (var i = 0; i < length; i++) {
		traverse(indent, node.getChild(i));
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
	// Instance of Node
	var tree = new Node('root'),
		left = new Node('left'),
		right = new Node('right'),
		leftLeft = new Node('leftLeft'),
		leftRight = new Node('leftRight'),
		rightLeft = new Node('rightLeft'),
		rightRight = new Node('rightRight');

	tree.add(left);
	tree.add(right);
	tree.remove(right);
	tree.add(right);

	left.add(leftLeft);
	left.add(leftRight);

	right.add(rightLeft);
	right.add(rightRight);

	traverse(1, tree);

	log.show();
};