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