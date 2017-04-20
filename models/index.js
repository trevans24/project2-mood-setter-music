var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mood-setter-music'); 

module.exports.Playlist = require('./playlist.js');
module.exports.Songs = require('./songs.js');