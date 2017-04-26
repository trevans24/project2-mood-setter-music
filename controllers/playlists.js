// JSON API Endpoints
var db = require('../models');

//get for all playlists in DB
function playlistIndex(req, res){
	db.Playlist.find({}, function(err, playlists){
		if (err){
			console.log(err);
		}
		console.log(req);
		console.log(res);
		res.json(playlists);
	});
}

//POST a new playlist
function createPlaylist(req, res){
	console.log('Posting a new Playlist!');
		// console.log(req.body);
		var newPlaylist = new db.Playlist({
			playlistName: req.body.playlistName,
			playlistURL: req.body.playlistURL,
			tracks: req.body.tracks
		});
		console.log(req.body);
		newPlaylist.save(function(err, playlist){
			if (err){
				console.log(err);
			}
			console.log(playlist);
			res.json(playlist);
		});

	}

//SHOW a single playlist
function showPlaylist(req, res){
	db.Playlist.findOne({_id: req.params.id}, function(err, data){
		// console.log(err);
		res.json(data);
	});
}


//PUT a playlist
function putPlaylist(req, res){
	var playlistId = req.params.id;
	db.Playlist.findOne({_id: playlistId}, function(err, foundPlaylist){
		if (err){
			console.log("Update error: " + err);
		}
		// console.log(foundPlaylist);
		console.log(req.body);
		console.log(req.params.id);
		foundPlaylist.playlistName = req.body.playlistName;
		// foundPlaylist.tracks = req.body.tracks;
		foundPlaylist.id = req.params.id;
		foundPlaylist.save(function(err, playlist){
			if (err){
				return console.log("Update error: " + err);
			}
			console.log("Updated ", playlist.playlistName);
			res.json(playlist);
		});
	});
}


//DELETE a playlist
function deletePlaylist(req, res){
	// console.log(req.body);
	// console.log(req.params);
	var playlistId = req.params.id;
	db.Playlist.findOneAndRemove({_id: playlistId}, function(err, deletedPlaylist){
		console.log("Deleted", deletedPlaylist.playlistName);
		// res.end();
		res.json(deletedPlaylist);
	});
}

module.exports = {
	playlistIndex: playlistIndex,
	createPlaylist: createPlaylist,
	showPlaylist: showPlaylist,
	putPlaylist: putPlaylist,
	deletePlaylist: deletePlaylist
};