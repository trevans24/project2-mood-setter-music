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
	// authenticatedUser()
  .get(staticsController.home)

//new user check and create
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

//current user login check
router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

//current user logout
router.route("/logout")
  .get(usersController.getLogout)

/////////////////////////////
//playlist routes
/////////////////////////////

//POST a new playlist
router.route('/playlists')
	.post(playlistController.createPlaylist)

//GET playlist route test page
router.route('/api/playlists')
	.get(playlistController.playlistIndex)

//SHOW playlist route
// router.route('/api/playlists/:id')
// 	.get()

//PUT playlist route
// router.route('/api/playlists/:id')
// 	.put(usersController, function(){

//  	});

//DELETE playlist route
// router.route('/api/playlists/:id')


function authenticatedUser(req,res,next){
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

module.exports = router