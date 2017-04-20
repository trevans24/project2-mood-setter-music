//front sided AJAX

$(document).ready(function(){
	console.log("Making sure this works");
	var playlist;

var key = require('client_id');

var beginning = 'https://api.soundcloud.com/',
	user = 'users/302529741',
	playlists = '/playlists/',
	playlistId = '316783201',
	client = '?client_id=';

// url: beginning + user + playlist + playlistId + client + '7PzyA3QRoqAdj9Veay4qRSuIKpYBghIf'

console.log(key);
$.get('/api/playlists', function(res){
	console.log("client is loaded!");
	res.forEach(function(playlist){
		console.log(playlist);
	});
});

// app.get('')








});


//function buids a single playlist button to render
//this is for each new bubble
function renderPlaylist(playlist){
	console.log('Rendering: ', playlist);

	var playlistHTML = 





}