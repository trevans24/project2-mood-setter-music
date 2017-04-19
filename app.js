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

//connecting mongoose
mongoose.connect('mongodb://localhost/mood-setter-music'); 

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
// app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
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




//listening on port 3000
app.listen(3000, function(){
	console.log("Listening on localhost:3000");
});