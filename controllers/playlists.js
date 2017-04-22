//JSON API Endpoints
var db = require('../models');

//api get to show routes
// app.get('/api', function api_index(req, res){
// 	res.json({
// 		message: "Welcome to Mood Setter!",
// 		base_url: 'https://tranquil-headland-64922.herokuapp.com/',
// 		endpoints: [
// 			{
// 				method: 'GET', 
// 				path: '/api/playlists', 
// 				description: "show your playlist and homepage"
// 			},
// 			{
// 				method: 'POST',
// 				path: '/api/playlists',
// 				description: "Add a new playlist"
// 			},
// 			{
// 				method: 'SHOW',
// 				path: '/api/playlists/:id',
// 				description: "Show individual playlist"
// 			},
// 			{
// 				method: 'PUT',
// 				path: '/api/playlists/:id',
// 				description: "Update your playlist"
// 			},
// 			{
// 				method: 'DELETE',
// 				path: '/api/playlists/:id',
// 				description: 'Delete your playlist'
// 			}
// 		]
// 	});
// });


//defining the url breakdown
var beginning = 'https://api.soundcloud.com/',
	user = 'users/302529741',
	playlists = '/playlists/',
	playlistId = '316783201',
	client = '?client_id=';

// var total = 'https://soundcloud.com/user-68692531/sets/date';

// var client_id = require('./env.js');

//get for all playlists in DB
function playlistIndex(req, res){
	db.Playlist.find({}, function(err, playlists){
		if (err){
			console.log(err);
		}
		// console.log(req);
		// console.log(res);
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
// app.get('/api/playlists/:id', function(req, res){
// 	db.Playlist.findOne({_id: req.params.id}, function(err, data){
// 		// console.log(err);
// 		// res.json(data);
// 	});
// });
// console.log('hello');
//PUT a playlist
// app.put('/api/playlists/:id', function(req, res){
// 	var playlistId = req.params.id;
// 	db.Playlist.findOne({_id: playlistId}, function(err, foundPlaylist){
// 		if (err){
// 			console.log("Update error: " + err);
// 		}
// 		// console.log(foundPlaylist);
// 		// console.log(req.body);
// 		// console.log(req.body.playlistName);
// 		foundPlaylist.playlistName = req.body.playlistName;
// 		foundPlaylist.tracks = req.body.tracks;
// 		foundPlaylist.save(function(err, playlist){
// 			if (err){
// 				return console.log("Update error: " + err);
// 			}
// 			console.log("Updated ", playlist.playlistName);
// 			res.json(playlist);
// 		});
// 	});
// });


//DELETE a playlist
function deletePlaylist(req, res){
	console.log(req);
	// var playlistId = req.params.id;
	// db.Playlist.findOneAndRemove({_id: playlistId}, function(err, deletedPlaylist){
	// 	console.log("Deleted", deletedPlaylist.playlistName);
	// 	// res.end();
	// 	res.json(deletedPlaylist);
	// });
}

module.exports = {
	playlistIndex: playlistIndex,
	createPlaylist: createPlaylist,
	deletePlaylist: deletePlaylist
};