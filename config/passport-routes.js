var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
//require passport
var passport = require("passport");

//require controllers
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var playlistController = require('../controllers/playlists');
///////////////////////////
//user routes
//////////////////////////

//home page
router.route('/playlists')
.get(staticsController.home);

//new user check and create
router.route('/signup')
.get(usersController.getSignup)
.post(usersController.postSignup);

//current user login check
router.route('/login')
.get(usersController.getLogin)
.post(usersController.postLogin);

//current user logout
router.route("/logout")
.get(usersController.getLogout);

/////////////////////////////
//playlist routes
/////////////////////////////

//POST a new playlist
router.route('/api/playlists')
.post(playlistController.createPlaylist);

//GET playlist route test page
router.route('/api/playlists')
.get(playlistController.playlistIndex);

// SHOW playlist route
router.route('/api/playlists/:id')
.get(playlistController.showPlaylist);

//PUT playlist route
router.route('/api/playlists/:id')
.put(playlistController.putPlaylist);

//DELETE playlist
router.route('/api/playlists/:id')
.delete(playlistController.deletePlaylist);


function authenticatedUser(req,res,next){
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

module.exports = router;