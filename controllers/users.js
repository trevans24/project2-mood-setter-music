//require passport
var passport = require("passport");

// GET /signup rendering signup ejs file
function getSignup(request, response, next) {
	response.render('signup.ejs', {message: request.flash('signupMessage')});
}

// POST //new user signup
function postSignup(request, response, next) {
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/playlists',
		failureRedirect: '/signup',
		failureFlash: true
	});
	return signupStrategy(request, response, next);
}

// GET /login render login ejs file
function getLogin(request, response, next) { 
	response.render('login.ejs', {message: request.flash('loginMessage')});
}

// POST /login authenticating user at login
function postLogin(request, response, next) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/playlists',
		failureRedirect: '/login',
		failureFlash: true
	});
	return loginStrategy(request, response, next);
}

// GET /logout signing out user from page
function getLogout(request, response, next) {
	request.logout();
	response.redirect('/login');
}

//TEST page to see if i understand what is going on
// function test(req, res, next){
// 	res.render('test.ejs');
// }
//exporting routes for use on signin and signup
module.exports = {
	getLogin: getLogin,
	postLogin: postLogin ,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout
};