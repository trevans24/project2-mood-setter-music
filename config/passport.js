//require strategy and user from model
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

//export passport through a function
//will allow for checking on users and passwords in DB
module.exports = function(passport){

	passport.serializeUser(function(user, callback){
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback){
		User.findById(id, function(err, user){
			callback(err, user);
		});
	});

//sign up new users
	passport.use('local-signup', new LocalStrategy({ //based off signup.ejs file look for these in the form
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback){
		User.findOne({'local.email': email}, function(err, user){//find user base off email used in usernameField
			if (err) return callback(err);
			if (user){
				return callback(null, false, req.flash('signupMessage', 'This user is already a part of Mood Setter!'));//if user already exists
			} else {//if user does not exist in DB
				var newUser = new User(); //create a new user
				newUser.local.email = email; //create username off email
				newUser.local.password = newUser.encrypt(password);//encrypt is method used to save password

				newUser.save(function(err){//save user to DB
					if (err) throw err;
					return callback(null, newUser);
				});
			}
		});
	}));

//check for user in database off login
	passport.use('local-login', new LocalStrategy({//login based off login.ejs
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback){
		User.findOne({'local.email': email}, function(err, user){
			if (err) {return callback(err);}
			if (!user){
				return callback(null, false, req.flash('loginMessage', 'No user found in Mood Setters database!'));//no user found (no err, no user, message)
			}
			if (!user.validPassword(password)){
				return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password, perhaps you should try again!'));//wrong password (no err, wrong password, message)
			}
			return callback(null, user);
		});
	}));
};