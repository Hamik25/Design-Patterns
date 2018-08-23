# Composite

---

#### Definition

Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

#### Summary

The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

A tree control is a perfect example of a Composite pattern. The nodes of the tree either contain an individual object \(leaf node\) or a group of objects \(a subtree of nodes\).

All nodes in the Composite pattern share a common set of properties and methods which supports individual objects as well as object collections. This common interface greatly facilitates the design and construction of recursive algorithms that iterate over each object in the Composite collection.

![](/assets/composite.png)

#### Participants

The objects participating in this pattern are:

**Component **-- in sample code: **Node**

* declares the interface for objects in the composition

**Leaf **-- in sample code: **Node**

* represent leaf objects in the composition. A leaf has no children

**Composite **-- in sample code: **Node**

* represents branches \(or sub trees\) in the composition

* maintains a collection if child

#### 

#### Sample code in JavaScript

In our example a tree structure is created from Node objects. Each node has a name and 4 methods: add, remove, getChild and hasChild. The methods are added to Node's prototype. This reducer the memory requirements as these methods are now shared by all now shared by all nodes. Node is fully recursive and there is no need for separate Component or Leaf objects.

A small Composite tree is built by adding nodes to parent nodes. Once complete we invoke traverse which iterates over each node in the tree and displays its name and depth \(by showing indentation\)

The log function is a helper which collects and displays results..

```js
// Adaptee
var Mp3MusicPlayer = function(track) {
    this.track = track;
};

Mp3MusicPlayer.prototype.play = function() {
    if (!this.track || !this.track.title) return;
    if (this.track.ext !== 'mp3') return 'Stop: This player can play only mp3 tracks';
    return 'Start: ' + this.track.title;
};


// Adapter
var MusicPlayerAdapter = function(ext) {
    this.ext = ext;
};

MusicPlayerAdapter.prototype.request = function(track) {
    if (!track) return;

    var mp3PlayerTrackModel = {
        title: track.title,
        originalExt: track.format,
        ext: this.ext
    };

    return mp3PlayerTrackModel;
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
    // Instance of MusicPlayerAdapter
    var musicPlayerAdapter = new MusicPlayerAdapter('mp3');

    var track1Model = {
        title: 'Galamukani (James Sakala) - Electric Violin Cover | Caitlin De Ville',
        format: 'mp4'
    };

    var track2Model = {
        title: 'Alone (Alan Walker) - Electric Violin Cover | Caitlin De Ville',
        format: 'mp4'
    };

    var track1 = new Mp3MusicPlayer(musicPlayerAdapter.request(track1Model));
    log.add(track1.play());

    var track2 = new Mp3MusicPlayer(track2Model);
    log.add(track2.play());

    log.show();
}
```

#### 



