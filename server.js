var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
var session = require('express-session')

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(session({
	secret:'somesecrettokenhere',
	resave: false,
	saveUninitialized: true,
	maxAgee : 5000000
}))

require(path.join(__dirname, 'server', 'config', 'mongoose.js'));
// require(path.join(__dirname, 'server', 'config', 'routes.js'))(app);

app.listen(8000, function(){
	console.log("Port 8000")
})



