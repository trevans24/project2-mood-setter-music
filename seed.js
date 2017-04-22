//require the models for db
var db = require('./models');
 	
//prepopulated playlist
var playlistList = [{
	playlistName: "Date",
	playlistURL: 'http://soundcloud.com/user-68692531/sets/date',
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
 	}]
 	// },
 // 	{
	//  	playlistName: "Rave",
	// 	playlistURL: 'http://soundcloud.com/kimik/sets/dj-mixes',
	// 	tracks:[{}]
	// },
	// {
	// 	playlistName: "Gym Rap",
	// 	playlistURL: 'https://soundcloud.com/user-68692531/sets/test',
	// 	tracks:[{}]
	// },
	// {
	// 	playlistName: "Kill Shit",
	// 	playlistURL: 'https://soundcloud.com/danielle-hughes-398515986/sets/five-finger-death-punch',
	// 	tracks:[{}]
	}];
// console.log('hello');
db.Playlist.remove({}, function (err, playlists){
	console.log('removed all playlists');
db.Playlist.create(playlistList, function(err, playlists){
	if (err){
		console.log(err);
	} else {
		console.log("created playlists", playlists);
		process.exit();
	}
});
});