//require mongoose and bcrypt
var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

//user schema
var User = mongoose.Schema({
	local : {
		email		: String,
		password	: String
	}
});

//encryption function to salt 10 times and hash password
User.methods.encrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

//validation of password
User.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};

//export user
module.exports = mongoose.model('User', User);