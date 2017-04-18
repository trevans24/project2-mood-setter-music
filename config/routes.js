//require express
var express = require('express');
var router = express.Router();

//parse info
var bodyParser = require('body-parser');

//manipulation of the POST
var methodOverride = require('method-override'),
	passport = require('passport'),
	usersController = require('../controllers/users'),
	staticsController = require('../controllers/statics');

router.route('/')
	.get(staticsController.home);

router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)

router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin)

router.route('/logout')
	.get(usersController.getLogout)

function authenticateUser(req, res, next){
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}

module.exports = router