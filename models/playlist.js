//require mongoos and song schema
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	// Song = require('./songs.js');

// mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );

var PlaylistSchema = new Schema ({
	title: String,
	tracks: [{
		trackNumber: Number,
		artistName: String,
		songName: String
	}]
});

//Playlist model
var Playlist = mongoose.model('Playlist', PlaylistSchema);

//export the playlist for use
module.exports = Playlist;