//require passport
var passport = require('passport');

//GET ---Signup ejs file to render
function getSignup(req, res, next){
	res.render('signup.ejs', {message: req.flash('signupMessage')});
}

//new user, signup and save to the Database
function postSignup(req, res, next){
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});
	return signupStrategy(req, res, next);
}

//login GET
function getLogin(req, res, next){
	res.render('login.ejs', {message: req.flash('loginMessage')});
}

//login POST
function postLogin(req, res, next){
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	});
	return loginStrategy(req, res, next);
}

//logout GET
function getLogout(req, res, next){
	req.logout();
	res.redirect('/');
}

//export routes
module.exports = {
getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout
};