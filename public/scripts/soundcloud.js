var apiKey = require();
SC.initialize({
	client_id: '7PzyA3QRoqAdj9Veay4qRSuIKpYBghIf'
	redirect_uri: 'http://localhost:3000'
});

SC.connect().then(function(){
	SC.post('/playlists', {
		playlist: {title: 'bull', tracks: tracks}
	});
});