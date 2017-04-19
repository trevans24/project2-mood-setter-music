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
var songs = [];

 	sampleSongs.push({
 		trackNumber: 1,
		artistName: "Steve Winwood",
		songName: "Higher Love"
 	});
 	sampleSongs.push({
 		trackNumber: 2,
		artistName: "Luther Vandross",
		songName: "Your Secret Love"
 	});
 	sampleSongs.push({
 		trackNumber: 3,
		artistName: "Mariah Carey",
		songName: "Always Be My Baby"
 	});
 	sampleSongs.push({
 		trackNumber: 4,
		artistName: "K-Ci & JoJo",
		songName: "All My Life"
 	});

console.log(songs);

//creating playlist with same songs in them
db.Song.remove({}, function(err, songs){
	console.log('Removed all songs');
	db.Song.create(songs, function(err, songs){
		if (err) {
			console.log(err);
		}
	db.Playlist.remove({}, function(err, playlists){
		playlistList.forEach(function(playlistData){
			var playlist = new db.Playlist({
				playlistName: playlistData.playlistName
			});
			console.log(playlist);
			db.Song.find({}, function(err, foundSongs){
				console.log(foundSongs);
				if(err){
					console.log(err);
					return;
				}
				playlist.songs = foundSongs;
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