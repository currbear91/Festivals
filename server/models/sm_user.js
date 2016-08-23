var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	fname : {type : String, required : true },
	lname : {type : String, required : true },
	email : {type : String, required : true },
	password : {type : String, required : true, minlength : 6},
	_events : [{type : mongoose.Schema.Types.ObjectId, ref : 'events'}],
	_calendar : {type : mongoose.Schema.Types.ObjectId, ref : 'calendars'}
}, {timestamps : true});

mongoose.model('users', userSchema);