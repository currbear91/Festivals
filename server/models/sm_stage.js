var mongoose = require('mongoose');
var stageSchema = new mongoose.Schema({
	name : {type : String, required : true },
	location : {type : String, required : true }
}, {timestamps : true});

mongoose.model('stages', stageSchema);