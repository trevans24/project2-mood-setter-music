//require dependencies
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//use express for morgan, cookie parser, and body parser
app.use(morgan('dev')); 
app.use(cookieParser());

//use body parser to accept the data types for the DB
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); 

//set view engine to ejs
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//set the static files in public directory
app.use(express.static(__dirname + '/public'));

//use express to initialize passport
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

//require passport
require('./config/passport')(passport);

//current user
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

//routes required from config folder
var routes = require('./config/passport-routes');
app.use(routes);


//HTML Endpoints

app.get('/', function homepage (req, res){
	res.sendFile(__dirname + '/views/index.ejs');
});


//JSON API Endpoints

//declare DB
var db = require('./models');

//api get to show routes
app.get('/api', function api_index(req, res){
	res.json({
		message: "Welcome to Mood Setter!",
		base_url: 'https://tranquil-headland-64922.herokuapp.com/',
		endpoints: [
			{
				method: 'GET', 
				path: '/api/playlists', 
				description: "show your playlist and homepage"
			},
			{
				method: 'POST',
				path: '/api/playlists',
				description: "Add a new playlist"
			},
			{
				method: 'SHOW',
				path: '/api/playlists/:id',
				description: "Show individual playlist"
			},
			{
				method: 'PUT',
				path: '/api/playlists/:id',
				description: "Update your playlist"
			},
			{
				method: 'DELETE',
				path: '/api/playlists/:id',
				description: 'Delete your playlist'
			}
		]
	});
});

//GET for the playlists
app.get('/api/playlists', function playlist_index(req, res){
	db.Playlist.find({}, function(err, playlists){
		if(err) console.log(err);
		res.json(playlists);
	});
});

//POST a new playlist
app.post('/api/playlists', function createPlaylist(req, res){
		console.log('Posting a new Playlist!');
		// console.log(req.body);
		// console.log(req.body);
		// console.log(req.body.playlistName);
		// console.log(req.body.tracks);
		var newPlaylist = new db.Playlist({
			playlistName: req.body.playlistName,
			tracks: req.body.tracks
		});
		console.log(newPlaylist);
		newPlaylist.save(function(err, playlist){
			if (err){
				console.log(err);
			}
			console.log(playlist);
			res.json(playlist);
		});
	});

//SHOW a single playlist
app.get('/api/playlists/:id', function(req, res){
	db.Playlist.findOne({_id: req.params.id}, function(err, data){
		res.json(data);
	});
});

// console.log('hello');
//PUT a playlist
app.put('/api/playlists/:id', function(req, res){
	var playlistId = req.params.id;
	db.Playlist.findOne({_id: playlistId}, function(err, foundPlaylist){
		if (err){
			console.log("Update error: " + err);
		}
		// console.log(foundPlaylist);
		// console.log(req.body);
		// console.log(req.body.playlistName);
		foundPlaylist.playlistName = req.body.playlistName;
		foundPlaylist.tracks = req.body.tracks;
		foundPlaylist.save(function(err, playlist){
			if (err){
				return console.log("Update error: " + err);
			}
			console.log("Updated ", playlist.playlistName);
			res.json(playlist);
		});
	});
});



//delete



//listening on port 3000
app.listen(3000, function(){
	console.log("Listening on localhost:3000");
});