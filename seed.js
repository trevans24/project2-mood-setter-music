//require the models for db
var db = require('./models');

//prepopulated playlist
var playlistList = [
{
	playlistName: "Date",
	tracks: [{
		trackNumber: 1,
		artistName: "Steve Winwood",
		songName: "Higher Love"
	},
	{
 		trackNumber: 2,
		artistName: "Luther Vandross",
		songName: "Your Secret Love"
 	},
 	{
 		trackNumber: 3,
		artistName: "Mariah Carey",
		songName: "Always Be My Baby"
 	},
 	{
 		trackNumber: 4,
		artistName: "K-Ci & JoJo",
		songName: "All My Life"
 	}
	]
}
];


//creating playlist with same songs in them
db.Song.remove({}, function(err, songs){
	// console.log('Removed all songs');
	db.Song.create(function(err, songs){
		if (err) {
			console.log(err);
		}
	db.Playlist.remove({}, function (err, playlists){
		playlistList.forEach(function(playlistData){
			console.log(playlistData);
			var playlist = new db.Playlist({
				playlistName: playlistData.playlistName,
				tracks: playlistData.tracks
			});
			console.log(playlist);
			db.Song.find({}, function(err, songs){
				console.log(songs);
				if(err){
					console.log(err);
					return;
				}
				playlist.songs = songs;
				playlist.save(function(err, savedPlaylist){
					if(err){
						return console.log(err);
					}
					console.log(savedPlaylist);
				});
			});
		});
		});
	});
});