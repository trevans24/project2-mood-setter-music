//require the models for db
var db = require('./models');

//prepopulated playlist
var playlistList = [
{
	playlistName: "Date"
}
// {
// 	playlistName: "Gym"
// },
// {
// 	playlistName: "Study"
// },
// {
// 	playlistName: "Coding"
// },
// {
// 	playlistName: "Gaming"
// },
// {
// 	playlistName: "Chill"
// }
];

//prepopulated songs for single playlist
var tracks = [];

 	tracks.push({
 		trackNumber: 1,
		artistName: "Steve Winwood",
		songName: "Higher Love"
 	});
 	tracks.push({
 		trackNumber: 2,
		artistName: "Luther Vandross",
		songName: "Your Secret Love"
 	});
 	tracks.push({
 		trackNumber: 3,
		artistName: "Mariah Carey",
		songName: "Always Be My Baby"
 	});
 	tracks.push({
 		trackNumber: 4,
		artistName: "K-Ci & JoJo",
		songName: "All My Life"
 	});

// console.log(songs);

//creating playlist with same songs in them
db.Song.remove({}, function(err, songs){
	// console.log('Removed all songs');
	db.Song.create(tracks, function(err, songs){
		if (err) {
			console.log(err);
		}
	db.Playlist.remove({}, function(err, playlists){
		playlistList.forEach(function(playlistData){
			console.log(playlistData);
			var playlist = new db.Playlist({
				playlistName: playlistData.playlistName
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