/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport();

module.exports = {
	  _config: {
	    actions: false,
	    shortcuts: false,
	    rest: false
	  },
	  
	add: function(req, res){
		var params = req.params.all();
		params['author'] = req.user.id;

    	Post.create(params, function(err, post){
    		if (err){ 
    			res.send(500, err); 
    		}
			res.send(200, post);    			
    	});
	},

	getGits: function(req, res){
	    Post.find({}).populate('author').populate('comments').exec(function(err, results) {
	    	res.send(200, results);
	    });
	},	

	getGitsByAuthor: function(req, res){
		var params = req.params.all();
		var authorId = params.authorId;
	    Post.find({author: authorId}).populate('author').populate('comments').exec(function(err, results) {
	    	res.send(200, results);
	    });
	},	

	getGitBySlug: function(req, res){
		var slug = req.params.all().slug;
		Post.findOne({slug: slug}).populate('author').populate('comments').exec(function(err, post){
		 	if (err){ res.send(500, err); }
    		else{
    			res.send(200, post);
	        }
		});
	},

	addComment: function(req, res){
		var params = req.params.all();

		Comment.create({author: params.author, content: params.content, post: params.post, postId: params.postId}, function(err, comment){
			if (err){ res.send(500, err); }
			else{
				res.send(200, comment);
			}
		});

		if(params.checkOpt == "yes"){
			var mailOptions = {
	          to: params.email,
	          from: sails.config.nodemailer.from,
	          subject: 'Add comment!',
	          html: "<p>"+params.content+"</p>"
	        };
	        smtpTransport.sendMail(mailOptions, function(err) {
	          if (!err) {
	          	console.log("success");
	          } else {
	            console.log(err);
	          }
	        });			
		}
	},

	getCommentsByGit: function(req, res){
		var slug = req.params.all().slug;
		Comment.find({post: slug}).populate('postId').populate('author').exec(function(err, results) {
			res.send(200, results);
		});		
	},

	addReplyComment: function(req, res){
		var params = req.params.all();
		var author = params.author;
		var id = params.commentId;
		var content = params.content;

		Comment.findOne({id: id}, function (err, comment){
			if (err) {
		        res.send(500, err);
		    }else{
		    	comment.replyComments.push({author: author, content: content});
		    	comment.save(function(err, comment){
	            	if(err) {res.send(500, err);} 
				    else{
				    	res.send(200, comment);
				    }
		    	});
		    }
		})
	},

	addVote: function(req, res){
		var params = req.params.all();
		var postId = params.postId;
		Post.findOne({id: postId}, function (err, post){
			if (err) {
		        res.send(500, err);
		    }else{
		    	if(!post.votes)
		    		post.votes = 0;
		    	post.votes += 1;
		    	post.save(function(err, post){
		    		if(err) {res.send(500, err);}
		    		else{
		    			res.send(200, post);
		    		}
		    	})
		    }
		})
	}
};

