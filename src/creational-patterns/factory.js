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
}