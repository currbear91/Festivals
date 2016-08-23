var mongoose = require('mongoose');
var calendarSchema = new mongoose.Schema({
	name : {type : String, required : true },
	_user : {type : mongoose.Schema.Types.ObjectId, ref : 'users'},
	_events : [{type : mongoose.Schema.Types.ObjectId, ref : 'events'}],
	_artists : [{type : mongoose.Schema.Types.ObjectId, ref : 'artists'}]
}, {timestamps : true});

mongoose.model('calendars', calendarSchema);