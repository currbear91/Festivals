var mongoose = require('mongoose');

var Event = mongoose.model('events');
module.exports = {
	index : function(req, res){
		Event
			.find({})
			.populate('_stages')
			.populate('_artists')
			.exec(function(err, events){
			if(err){
				return res.send(err);
			} else {
				// console.log(topics);
				res.send(events);
			}
		});
	},
	create : function(req, res){
		// console.log(req.session.userId);
		console.log("Entire BODY: ", req.body);
		console.log("Name: ", req.body.name);

		Event.create({
				name : req.body.name,
				description : req.body.description,
				location : req.body.location,
				startDate : req.body.startDate,
				endDate : req.body.endDate,
				logoURL : req.body.logoURL
			}, function(err, event){
				if(err){
					console.log('not able to save Event');
					console.log(err);
				} else {
					console.log('saved Event successfully');
					res.send(event);
				};
		});
	},
	show : function(req,res){
    	Event
    		.findOne({_id : req.params._id})
    		.populate('_stages _artists')
    		.exec(function(err, event){
	    	if(err){
	    		console.log('unable to find a single event');
	    		res.send('unable to find single event');
	    	} else {
	    		// console.log("show function", topic);
	    		res.json(event);
	    	}
    	});
  	},
  	delete : function(req, res){
		Event.remove({_id : req.params._id}, function(err){
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