// Geo Coder - Real Subject
var GeoCoder = function() {

	var addresses = {
		'Amsterdam': '52.3700° N, 4.8900° E',
		'London': '51.5171° N, 0.1062° W',
		'Paris': '48.8742° N, 2.3470° E',
		'Berlin': '52.5233° N, 13.4127° E'
	};

	this.getLatLng = function(address) {
		return addresses.hasOwnProperty(address) ? addresses[address] : 'Address Is Not Found';
	};
};

// Geo Proxy - Proxy
var GeoProxy = function() {
	var geoCoder = new GeoCoder();
	var geoCache = {};

	return {
		getLatLng: function(address) {
			if (!geoCache[address]) {
				geoCache[address] = geoCoder.getLatLng(address);
			}
			log.add(address + ': ' + geoCache[address]);
			return geoCache[address];
		},
		getCount: function() {
			return Object.keys(geoCache).length;
		}
	};
};

// Log helper
var log = (function () {
    var log = '';
 
    return {
        add: function (msg) { log += msg + '\n'; },
        show: function () { console.log(log); log = ''; }
    }
})();

// Client
function run() {
	var geo = new GeoProxy();

	// Geolocation Requests
	geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");

    log.add('\nCache size: ' + geo.getCount());
    log.show();
};