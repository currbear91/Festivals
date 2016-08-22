var mongoose = require('mongoose');

var User = mongoose.model('users');
module.exports = {
	index : function(req, res){
		User.find(function(err, users){
			if(err){
				return res.send(err);
			} else {
				res.send(users);
			}
		});
	},
	show : function(req, res){
		console.log(req.params._id);
		User
			.findOne({_id : req.params._id})
			.populate('_events')
			.populate('_calendar')
			.exec(function(err, oneUser){
			if(err){
				console.log(err);
			} else {
				console.log(oneUser);
				res.json(oneUser);
			}
		})
	},
	create : function(req,res){
    var user = new User(req.body)
	    User.save(function(err){
	      if(err){
	        console.log(err)
	      } else{
	        res.json(user);
	      }
	    })
	},

	login : function(req, res){
		if(!req.body.name) {
			console.log('req.body.name does not exist');
			res.send("req.body.name doesn't exist");
		} else {
			User.create({name : req.body.name}, function(err, user){
				if(err){
					console.log('user exists, sending that user');
					User.findOne({name : req.body.name}, function(err, existingUser){
						req.session.userId = existingUser._id;
						req.session.name = existingUser.name;
						res.send(existingUser);
					})
				} else {
					console.log('saved successfully');
					req.session.userId = user._id;
					req.session.name = user.name;
					res.send(user);
				}
			});
		};
	},
	logout : function(req, res){
		req.session.destroy();
		res.send({success : true});
	},
	delete : function(req, res){
		User.remove({_id : req.params._id}, function(err){
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