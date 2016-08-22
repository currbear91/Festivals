var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
	name : {type : String, required : true },
	description : {type : String, required : true },
	location : {type : String, required : true},
	startDate : {type : Date, required : true},
	endDate : {type : Date, required : true},
	logoURL : {type : String, required : true},
	_stages : [{type : mongoose.Schema.Types.ObjectId, ref : 'events'}],
	_artists : [{type : mongoose.Schema.Types.ObjectId, ref : 'artists'}]
}, {timestamps : true});

mongoose.model('events', eventSchema);