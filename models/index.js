var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mood-setter-music');

module.exports.Playlist = require('./playlist.js');
module.exports.Song = require('./songs.js');