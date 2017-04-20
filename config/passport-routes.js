var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

///////////////////////////
//user routes
//////////////////////////

//home page
router.route('/')
  .get(staticsController.home);

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

//GET playlist route
// router.route('/api/playlists')
// 	.get()

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
	res.redirect('/');
}

module.exports = router