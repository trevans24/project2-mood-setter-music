//front sided AJAX
$(document).ready(function(){
	console.log("Making sure this works");

  // var icon = $('.play');
  // icon.click(function() {
  //    icon.toggleClass('active');
  //    return false;
  // });

//initial load to show playlists already in DB
$.get('/api/playlists', function(res){
	console.log("client is loaded!");
	// console.log(res);
	res.forEach(function(playlist){
		// console.log(playlist);
		renderPlaylist(playlist);
	});
});




});

//function buids a single playlist button to render
//this is for each new bubble
function renderPlaylist(playlist){
	console.log('Rendering: ', playlist);
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
	console.log($('.bubble'));
	// get a playlist from the API
	$('.bubble').last().on('click', function playlistFind(e){
		e.preventDefault();
		var url = $(this).data("playlist-url");
		console.log(url);
		SC.Widget('test').load(url);
	});


}