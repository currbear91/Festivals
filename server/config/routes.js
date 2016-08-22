var path = require('path');
var users = require(path.join(__dirname, '../controllers/sc_users.js'));
var events = require(path.join(__dirname, '../controllers/sc_events.js'));
// var artists = require(path.join(__dirname, '../controllers/sc_artists.js'));

module.exports = function(app){
	// User routes
	app.get('/users', users.index);
	app.post('/users', users.login);
	app.post('/users/logout', users.logout);
	app.get('/users/:_id', users.show);
	app.delete('/users/:_id', users.delete);
	// Events routes
	app.get('/events', events.index);
	app.post('/events', events.create);
	app.get('/events/:_id', events.show);
	app.delete('/events/:_id', events.delete);
	// Artists routes
	// app.get('/artists', artists.index);
	// app.post('/artists', artists.create);
	// app.get('/artists/:_id', artists.show);
	// app.delete('/artists/:_id', artists.delete);
}