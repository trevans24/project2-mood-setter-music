//front sided AJAX
$(document).ready(function(){
console.log("Making sure this works");

//initial load to show playlists already in DB
$.get('/api/playlists', function(res){
	// console.log("client is loaded!");
	// console.log(res);
	res.forEach(function(playlist){
		// console.log(playlist);
		// console.log('test2');
		renderPlaylist(playlist);
	});
});


//test initializing for search functionality
SC.initialize({
  		client_id: '7PzyA3QRoqAdj9Veay4qRSuIKpYBghIf'
		});

//sc get a playist url
SC.get('/playlists', {
	kind: 'playlist',
	sharing: 'public',
	title: 't'//this is the changable field
}).then(function(playlistSearch){
	console.log(playlistSearch[15]);
	// console.log('test3');
	console.log(playlistSearch[15].permalink_url);
});
// console.log('test1');


});

// console.log('test');
//function buids a single playlist button to render
//this is for each new bubble
function renderPlaylist(playlist){
	// console.log('test4');
	// console.log('Rendering: ', playlist);
	// console.log(playlist._id);
	var playlistHTML = 
	"<div class='bubble' data-playlist-id='" + playlist._id + "' data-playlist-url='" + playlist.playlistURL + "'>" +
	"		<div class='playlist-body'>" +
	"			<div class='col-md-1'>" +
	"				<h4 class='playlist-name'>" + playlist.playlistName + "</h4>" +
	"			</div>" +
	"		</div> " +
	"</div>";

	$('#playlists').append(playlistHTML);
	// console.log($('.bubble'));
	// get a playlist from the API
	$('.bubble').last().on('click', function playlistFind(e){
		e.preventDefault();
		var url = $(this).data("playlist-url");
		// console.log(url);
		// console.log('test5');
		SC.Widget('test').load(url);
	});

}