/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var async = require('async');
var _ = require('lodash');
module.exports = {
	_config: {
	    actions: false,
	    shortcuts: false,
	    rest: true
  	},

	user: function(req, res) {
		return res.view('pages/test/user', {
	      layout: 'staticlayout'
	    });

	},

	usergits: function(req, res) {
		return res.view('pages/test/usergits', {
	      layout: 'staticlayout'
	    });

	},
	
	uploadImage: function(req, res){
		var params = req.params.all();
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});						
			//	Call to /upload via GET is error

		var uploadFile = req.file('uploadImage');
	    uploadFile.upload({dirname: '../../assets/images/upload'}, function onUploadComplete (err, files) {				   																		
	    	if (err) return res.serverError(err);
    	//	IF ERROR Return and send 500 error with error
    		var image = files[0];
    		if(image){
	            var fd = image.fd ;
	            var index = fd.lastIndexOf('\/');
	            var imageName = fd.substring(index+1 , fd.length);
				imageName = '/images/upload/' + imageName;
	            req.user.picture = imageName;
	            delete req.user.password;
	            req.user.save(function(err, users){
	            	if(err) {console.log(err);} 
				    else console.log('success');
	            });
	            return res.send(200, imageName);    			
    		}
	    });    
	},

	getUser: function(req, res){		
	    return res.send(200, {user: req.user, email: req.user.email});			
	},

	updateUser: function(req, res){
		var params = req.params.all();
		if(params.email)
			req.user.email = params.email;
		if(params.username)
			req.user.username = params.username;
		if(params.job)
			req.user.job = params.job;
		if(params.website)
			req.user.website = params.website;

		delete req.user.password;
		req.user.save(function(err, users){
        	if(err) {console.log(err);} 
		    else console.log('success');
        });
	    res.send(200, req.user);
	},	

	getUserByName: function(req, res){
		var params = req.params.all();
		User.findOne({username: params.username}).exec(function(err, user){
		 	if (err){ res.send(500, err); }
    		else{
    			res.send(200, user);
	        }
		});
	},

	updateFollow: function(req, res){
		var params = req.params.all();
		var username = params.username;
		var loggedUser = params.loggedUser;

		User.findOne({username: username}).exec(function(err, user){
			//check username exist in followers array.
			var found =  false;
			var i = 0;
			for (i in user.followerUsers){
				if(user.followerUsers[i] === loggedUser){					
					found = true;
				}
			}
			if(!found){
				user.followerUsers.push(loggedUser);
				user.followers = user.followers + 1;
			
				delete user.password;
				user.save(function(err, user){
		            	if(err) {console.log(err);} 
					    else res.send(200, {user: user, message: "Successfully Updated!"});
		            });

				User.findOne({username: loggedUser}).exec(function(err, user){
					user.followingUsers.push(username);
					user.following = user.following + 1;
					delete user.password;
					user.save(function(err, user){
			            	if(err) {console.log(err);} 
						    else console.log("success");
			            });
				});
			}else {
				res.send({message: "Already followed!"});
			}
		});
	},
};