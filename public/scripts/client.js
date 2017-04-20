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

$.get('/api/playlists', function(res){
	res.forEach(function(playlist){
		console.log(playlist);
	});
});

// app.get('')








});