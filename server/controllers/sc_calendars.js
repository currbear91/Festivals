var mongoose = require('mongoose');

var Calendar = mongoose.model('calendars');
module.exports = {
	index : function(req, res){
		Calendar
			.find({})
			.populate('_user')
			.populate('_events')
			.populate('_artists')
			.exec(function(err, calendars){
			if(err){
				return res.send(err);
			} else {
				res.send(calendars);
			}
		});
	},
	create : function(req, res){
		console.log("Entire BODY: ", req.body);
		console.log("Name: ", req.body.name);

		Calendar.create({
				name : req.body.name,
				_user : req.session.userId
			}, function(err, calendar){
				if(err){
					console.log('not able to save Calendar');
					console.log(err);
				} else {
					console.log('saved Calendar successfully');
					res.send(calendar);
				};
		});
	},
	show : function(req, res){
		console.log(req.params._id);
		Calendar.findOne({_id : req.params._id}, function(err, calendar){
			if(err){
				console.log(err);
			} else {
				console.log(calendar);
				res.json(calendar);
			}
		})
	},
	delete : function(req, res){
		Calendar.remove({_id : req.params._id}, function(err){
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