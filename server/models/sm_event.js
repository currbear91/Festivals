var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
	title : {type : String, required : true },
	description : {type : String, required : true },
	location : {type : String, required : true},
	start : {type : Date, required : true},
	end : {type : Date, required : true},
	logoURL : {type : String, required : true},
	url : {type : String},
	_stages : [{type : mongoose.Schema.Types.ObjectId, ref : 'stages'}],
	_artists : [{type : mongoose.Schema.Types.ObjectId, ref : 'artists'}]
}, {timestamps : true});

mongoose.model('events', eventSchema);