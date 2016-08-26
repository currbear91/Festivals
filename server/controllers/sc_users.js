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
			.populate('_events _artists')
			.exec(function(err, oneUser){
			if(err){
				console.log(err);
			} else {
				console.log(oneUser);
				res.json(oneUser);
			}
		})
	},
	getSession : function(req, res){
		console.log("in the session function on sc_users")
		sessionId = req.session.userId;
		res.send(sessionId);
	},
	create : function(req,res){
    	console.log(req.body)
    	var user = new User(req.body)
    	console.log("********************")
	    user.save(function(err){
	      if(err){
	        console.log(err)
	      } else{
	      	req.session.userId = user._id;
			req.session.name = user.name;
	        res.json(user);
	      }
	    })
	},
	addArtist : function(req, res){
		User.update({_id : req.session.userId}, {$push : {_artists : req.body._id}}, function(err, confirm){
			if(err){
				console.log("error message", err);
				res.send(err);
			} else {
				console.log(confirm);
				res.send(confirm);
			}
		})
	},
	login : function(req, res){
		if(!req.body.password) {
			console.log('req.body.name does not exist');
			res.send("req.body.name doesn't exist");
		} else {
			console.log("*^*^*^*^*^*", req.body.password, "and", req.body.email);
			User.findOne({password : req.body.password}, function(err, user){
				if(err){
					console.log("error message", err);
					res.send(err);
				} else {
					if(user === null){
						console.log("user does not exist");
						res.send("user does not exist");
					} else {
						console.log(user);
						console.log("user logged in");
						req.session.userId = user._id;
						req.session.name = user.name;
						console.log(req.session.userId);
						res.send(user);
					}
					
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