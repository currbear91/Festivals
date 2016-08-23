var path = require('path');
var users = require(path.join(__dirname, '../controllers/sc_users.js'));
var events = require(path.join(__dirname, '../controllers/sc_events.js'));
var artists = require(path.join(__dirname, '../controllers/sc_artists.js'));
var stages = require(path.join(__dirname, '../controllers/sc_stages.js'));
var calendars = require(path.join(__dirname, '../controllers/sc_calendars.js'));

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
	app.get('/artists', artists.index);
	app.post('/artists', artists.create);
	app.get('/artists/:_id', artists.show);
	app.delete('/artists/:_id', artists.delete);
	// Stages routes
	app.get('/stages', stages.index);
	app.post('/stages', stages.create);
	app.get('/stages/:_id', stages.show);
	app.delete('/stages/:_id', stages.delete);
	// Stages routes
	app.get('/calendars', calendars.index);
	app.post('/calendars', calendars.create);
	app.get('/calendars/:_id', calendars.show);
	app.delete('/calendars/:_id', calendars.delete);
}