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
var Songs = mongoose.model('Songs', SongSchema);

//export song

module.exports = Songs;
