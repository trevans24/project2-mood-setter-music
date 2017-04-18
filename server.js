//require modules
var express = require('express'),
	app = express(),
	key = process.env.Client_ID,
	bodyParser = require('body-parser');

// require('./.env').config();

// console.log(api_key);

//initializing the client
// app.initialize({
// 	client_id: key,
// 	redirect_uri: "CALLBACK_URL"
// });

//route: localhost:3000/
app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});
});



app.listen(process.env.PORT || 3000, function(){
	console.log('Listening at http://localhost:3000');
});