# Proxy

---

#### Definition

Provide a surrogate or placeholder for another object to control access to it.

#### Summary

The Proxy pattern  provides a surrogate or placeholder object for another object and controls access to this other object.

In object-oriented programming, objects do the work they advertise through their interface \(properties and methods\). Clients of these objects expect this work to be done quickly and efficiently. However, there are situations where an object is severely constrained and cannot live up to its responsibility. Typically this occurs when there is a dependency on a remote resource \(resulting in network latency\) or when an object takes a long time to load.

In situations like these you apply the Proxy pattern and create a proxy object that ‘stands in’ for the original object. The Proxy forwards the request to a target object. The interface of the Proxy object is the same as the original object and clients may not even be aware they are dealing with a proxy rather than the real object.![](/assets/ice_screenshot_20180824-141239.png)

#### Participants

The objects participating in this pattern are:

**Client **-- in sample code: **Computer**

* calls Proxy to request an operation

**Proxy **-- in sample code: **GeoProxy**

* provides an interface similar to the real object
* maintains a reference that lets the proxy access the real object
* handles requests and forwards these to real object

**RealSubject **-- in sample code: **GeoCoder**

* defines the real object for which service is requested

#### Sample code in JavaScript

The GeoCoder object simulates the Google Maps Geocoding service. In Geocoding you provide a location \(a place on the earth\) and it will return its latitude/longitude \(lat.lng.\). Our GeoCoder can resolve only 4 locations, but in reality there are millions, because it involves countries, cities, and streets.

The programmer decided to implement a Proxy object because GeoCoder is relatively slow. The proxy object is called GeoProxy. It is known that many repeated requests \(for the same location\) are coming in. To speed things up GeoProxy caches frequently requested locations. If a location is not already cached it goes out to the real GeoCoder service and stores the results in cache.

Several city locations are queried and many of these are for the same city. GeoProxy builds up its cache while supporting these calls. At the end GeoProxy has processed 11 requests but had to go out to GeoCoder only 3 times. Notice that the client program has no knowledge about the proxy object \(it calls the same interface with the standard getLatLng method\).

The log function is a helper which collects and displays results.

```js
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
```



