//require mongoose
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


// building the songSchema

var SongSchema = new Schema({
	trackNumber: Number,
	artistName: String,
	songName: String
});

//song model
var Song = mongoose.model('Song', SongSchema);

//export song

module.exports = Song;