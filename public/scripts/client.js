//front sided AJAX
$(document).ready(function(){
console.log("Making sure this works");

//initial load to show playlists already in DB
$.get('/api/playlists', function(res){
	// console.log("client is loaded!");
	// console.log(res);
	res.forEach(function(playlist){
		// console.log(playlist);
		renderPlaylist(playlist);
	});
});

//test initializing
SC.initialize({
  		client_id: '7PzyA3QRoqAdj9Veay4qRSuIKpYBghIf'
		});

//sc get a playist url
SC.get('/playlists', {
	kind: 'playlist',
	sharing: 'public',
	permalink: 'date'
}).then(function(playlist){
	// console.log(playlists[15]);
	console.log(playlist[15].permalink_url);
});




});
//function buids a single playlist button to render
//this is for each new bubble
function renderPlaylist(playlist){
	// console.log('Rendering: ', playlist);
	// console.log(playlist._id);
	var playlistHTML = 
	"<div class='bubble' data-playlist-id='" + playlist._id + "' data-playlist-url='" + playlist.playlistURL + "'>" +
	// "	<div class=''>" +
	// "	<!-- internal section of playlist bubbles -->" +
	"		<div class='playlist-body'>" +
	"			<div class='col-md-1'>" +
	"				<h4 class='playlist-name'>" + playlist.playlistName + "</h4>" +
	"			</div>" +
	"		</div> " +
	// "		<!-- end of internal section -->" +
	// "	</div>" +
	"</div>";

	$('#playlists').append(playlistHTML);
	// console.log($('.bubble'));
	// get a playlist from the API
	$('.bubble').last().on('click', function playlistFind(e){
		e.preventDefault();
		var url = $(this).data("playlist-url");
		// console.log(url);
		SC.Widget('test').load(url);
	});


}