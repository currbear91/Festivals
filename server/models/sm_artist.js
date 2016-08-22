var mongoose = require('mongoose');
var artistSchema = new mongoose.Schema({
	name : {type : String, required : true },
	genre : {type : String, required : true },
	bio : {type : String, required : true},
	image : {type : String},
	performanceDate : {type : Date, required : true},
	socialLinks : [{type : String}],
	music : [{type : String}],
	_stage : {type : mongoose.Schema.Types.ObjectId, ref : 'stages'},
	_events : [{type : mongoose.Schema.Types.ObjectId, ref : 'events'}]
}, {timestamps : true});

mongoose.model('artists', artistSchema);