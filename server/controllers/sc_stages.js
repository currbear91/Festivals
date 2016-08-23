var mongoose = require('mongoose');

var Stage = mongoose.model('stages');
module.exports = {
	index : function(req, res){
		Stage.find(function(err, stages){
			if(err){
				return res.send(err);
			} else {
				res.send(stages);
			}
		});
	},
	create : function(req, res){
		console.log("Entire BODY: ", req.body);
		console.log("Name: ", req.body.name);

		Stage.create({
				name : req.body.name,
				location : req.body.location
			}, function(err, stage){
				if(err){
					console.log('not able to save Stage');
					console.log(err);
				} else {
					console.log('saved Stage successfully');
					res.send(stage);
				};
		});
	},
	show : function(req, res){
		console.log(req.params._id);
		Stage.findOne({_id : req.params._id}, function(err, stage){
			if(err){
				console.log(err);
			} else {
				console.log(stage);
				res.json(stage);
			}
		})
	},
	delete : function(req, res){
		Stage.remove({_id : req.params._id}, function(err){
	    	if(err){
	    		console.log('unable to delete', err);
	    		res.send('unable to delete');
	    	} else {
	    		console.log('deletion successful');
	    		res.send({success : true});
	    	}
    	})
	}
}