//front sided AJAX
$(document).ready(function(){
// console.log("Making sure this works");

//adding the widget for playing
 var widget = SC.Widget("test");
      widget.bind(SC.Widget.Events.READY, function() {
        widget.pause();
      });

//test initializing for search functionality
SC.initialize({
	client_id: '7PzyA3QRoqAdj9Veay4qRSuIKpYBghIf'
});

//initial load page
$.get('/playlists', function(res){
	// console.log("client is loaded!");
	// console.log(req);
	// console.log("hello");
	// console.log(res);
});

//load all playlists
$.get('/api/playlists', function(res){
	res.forEach(function(playlist){
		// console.log(playlist);
		// console.log('test2');
		renderPlaylist(playlist);
	});
});

//sc get a playist url
$('form').submit(function(event){
	event.preventDefault();
	// var formData = $(this).serialize();
	// console.log(formData.mood);
	// console.log(formData);
	var name = $('#name').val();
	var mood = $('#mood').val();
	// console.log(name);
	// console.log(mood);
	SC.get('/playlists', {
		kind: 'playlist',
		sharing: 'public',
	title: mood//this is the changable field
}).then(function(playlistSearch){
	// console.log(playlistSearch[15]);
	// console.log('test3');
	// console.log(playlistSearch[15].permalink_url);
	var newPlaylist = {
		playlistName: name,
		playlistURL: playlistSearch[15].permalink_url,
		tracks: []
	};
	// console.log(newPlaylist);
	$.ajax({
		url: '/playlists',
		type: 'POST',
		data: newPlaylist,
		success: console.log("New Playlist Added: " + newPlaylist.playlistName)
	});
	$('#name').val('');
	$('#mood').val('');
	// console.log($(this));
	renderPlaylist(newPlaylist);
	// console.log(newPlaylist);
	// $(this).trigger('reset');
});
});
// console.log('test1');

//DELETE a playlist bubble
$('#delete').on('click', function deletePlaylist(event){
	event.preventDefault();
	console.log(event);
	console.log($(this));
	// $.ajax({
	// 	url: '/playlists',
	// 	type: 'DELETE',
	// 	data: data,
	// 	success: console.log("deleted", data),
	// 	error: console.log(error)
	// });
});



});

// console.log('test');
//function buids a single playlist button to render
//this is for each new bubble
function renderPlaylist(playlist){
	var playlistHTML = 
	"<section"+
	"<div class='ball bubble' data-playlist-id='" + playlist._id + "' data-playlist-url='" + playlist.playlistURL + "'>" +
	"		<div class='playlist-body'>" +
	"			<div class='col-md-1'>" +
	"				<h4 class='playlist-name'>" + playlist.playlistName + "</h4>" +
	"			</div>" +
	"		</div> " +
	"		<button id='delete' class='btn data-playlist-id='" + playlist._id + "'>&times</button>"+
	"</div>"+
	"</section>";

	$('#playlists').append(playlistHTML);
	// console.log($('.bubble'));
	$('.bubble').last().on('click', function playlistFind(e){
		e.preventDefault();
		var url = $(this).data("playlist-url");
		// console.log(url);
		// console.log('test5');
		SC.Widget('test').load(url);
	});

}