var mongoose = require('mongoose');
var Event = mongoose.model('events');

var Artist = mongoose.model('artists');
module.exports = {
	index : function(req, res){
		Artist
			.find({})
			.populate('_stage')
			.populate('_events')
			.exec(function(err, artists){
			if(err){
				return res.send(err);
			} else {
				// console.log(topics);
				res.send(artists);
			}
		});
	},
	create : function(req, res){
		console.log("Entire BODY: ", req.body);
		console.log("Name: ", req.body.name);

		Artist.create({
				name : req.body.name,
				genre : req.body.genre,
				bio : req.body.bio,
				imageURL : req.body.imageURL,
				performanceDate : req.body.performanceDate,
				socialLinks : req.body.socialLink,
				music : req.body.music,
			}, function(err, artist){
				if(err){
					console.log('not able to save Artist');
					console.log(err);
				} else {
					Event.update({_id : req.body.event_id}, {$push : {_artists : artist._id}}, function(err, confirm){
						if(err){
							console.log('unable to push artist to event', err);
							res.send(err);
						} else {
							console.log('saved Artist successfully');
							res.send(artist);
						}
					})
				};
		});
	},
	show : function(req,res){
    	Artist
    		.findOne({_id : req.params._id})
    		.populate('_stage _events')
    		.exec(function(err, artist){
	    	if(err){
	    		console.log('unable to find a single artist');
	    		res.send('unable to find single artist');
	    	} else {
	    		res.json(artist);
	    	}
    	});
  	},
  	delete : function(req, res){
		Artist.remove({_id : req.params._id}, function(err){
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