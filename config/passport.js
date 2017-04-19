//require strategy and user
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

//export the passport
module.exports = function(passport){

	passport.serializeUser(function(user, callback){
		callback(null, user.id);
	});

	passport.serializeUser(function(id, callback){
		User.findById(id, function(err, user){
			callback(err, user);
		});
	});
//checking on signup if there is a user
//if no user then create one
//if user then have them signin
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback){
		User.findOne({'local.email': emaili}, function(err, user){
			if(err) return callback(err);
			if(user){
				return callback(null, false, req.flash('signupMessage', 'This user already exists'));
			} else {
				var newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.encrypt(password);

				newUser.save(function(err){
					if(err) throw err;
					return callback(null, newUser);
				});
			}
		});
	}));
//checking if user doesnt exist
//if no user then alert them to sign up
//if password is wrong then tell them try again
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback){
		User.findOne({'local.email': email}, function(err, user){
			if(err) return callback(err);
			if(!user){
				return callback(null, false, req.flash('loginMessage', 'Sorry no User by that email exists!'));
			}
			if(!user.validPassword(password)){
				return callback(null, false, req.flash('loginMessage', 'Ooops! Sorry, wrong password...maybe you need to play some better music'));
			}
			return callback(null, user);
		});
	}));

};