//front sided AJAX
$(document).ready(function(){
	console.log("Making sure this works");

  var icon = $('.play');
  icon.click(function() {
     icon.toggleClass('active');
     return false;
  });




//initial load to show playlists already in DB
$.get('/home', function(res){
	console.log("client is loaded!");
	// console.log(res);
	res.forEach(function(playlist){
		console.log(playlist);
		renderPlaylist(playlist);
	});
});

// get a playlist from the API
$('.find').on('click', function getPlaylist(res){
	$.ajax({
		url: '/api/playlists',
		type: 'GET',
		data: res,
		success: console.log(res)
	});
});




});

//function buids a single playlist button to render
//this is for each new bubble
function renderPlaylist(playlist){
	console.log('Rendering: ', playlist);
	// console.log(playlist._id);
	var playlistHTML = 
"<div class='playlist data-playlist-id='" + playlist._id + ">" +
"	<div class='col-md-3 col-md-offest-1'>" +
"	<!-- internal section of playlist bubbles -->" +
"		<div class='playlist-body'>" +
"			<div class='col-md-1'>" +
"				<span class='playlist-name'>" + playlist.playlistName + "</span>" +
"			</div>" +
"		</div> " +
"		<!-- end of internal section -->" +
"	</div>" +
"</div>";

$('#playlists').append(playlistHTML);



}