//require mongoos and song schema
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	Songs = require('./songs.js');

// mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );

var PlaylistSchema = new Schema ({
	playlistName: String,
	playlistURL: String,
	tracks: [Songs.schema]
});

//Playlist model
var Playlist = mongoose.model('Playlist', PlaylistSchema);

//export the playlist for use
module.exports = Playlist;