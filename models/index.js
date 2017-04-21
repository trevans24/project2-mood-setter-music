var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 
                process.env.MONGOLAB_URI || 
                process.env.MONGOHQ_URL ||
                'mongodb://localhost/mood-setter-music'); 

module.exports.Playlist = require('./playlist.js');
module.exports.Songs = require('./songs.js');