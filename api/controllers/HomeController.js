/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var async = require('async');
var _ = require('lodash');

module.exports = {

	_config: {
	    actions: false,
	    shortcuts: false,
	    rest: false
  	},

	index: function(req, res) {

						if(!req.user){
							return res.view('homepage', {
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('homepage', {
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}
					},

	launching: function(req, res) {

						if(!req.user){
							return res.view('pages/launching', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('pages/launching', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}

					},
	team: function(req, res) {

						if(!req.user){
							return res.view('pages/team', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('pages/team', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}

					},


	about: function(req, res) {

						if(!req.user){
							return res.view('pages/about', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('pages/about', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}

					},

	contact: function(req, res) {

						if(!req.user){
							return res.view('pages/contact', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('pages/contact', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}

					},

	terms: function(req, res) {

						if(!req.user){
							return res.view('pages/terms', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('pages/terms', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}

					},

	privacy: function(req, res) {

						if(!req.user){
							return res.view('pages/privacy', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: "",
						      	picture: "",
						      	slug: ""
						    });
						}else{
							return res.view('pages/privacy', {
								layout: 'staticlayout',
						      	user: req.user,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug
						    });							
						}

					},


	username: function(req, res) {
					var slug = req.params.username;				
					User.findOneBySlug(slug).exec(function (err, user){
						if(err) return res.serverError(err);
						if(!req.user){
							if(!user){
								return res.view('homepage', {
							      	name: "",
							      	username: "",
							      	picture: "",
							      	slug: ""
							    });
							}else{
								return res.view('pages/username', {
									layout: 'staticlayout',
									user: user,			
									name: user.username,  	// user name
									username: "",			// current logged user name
							      	picture: "",
							      	slug: ""
							    });								
							}
						}else{
							if(!user){
								return res.view('homepage', {
							      	user: req.user,
							      	name: "",						// user name
							      	username: req.user.username,	// current logged user name
							      	picture: req.user.picture,
							      	slug: req.user.slug
							    });
							}else{
								return res.view('pages/username', {
									layout: 'staticlayout',
									user: user,
									name: user.username,			// user name
							      	username: req.user.username,	// current logged user name
							      	picture: req.user.picture,
							      	slug: req.user.slug
							    });								
							}
						}
					});						
				},

	userpage: function(req, res) {
					var slug = req.params.userpage;
					var comments = [];
					Comment.find({post: slug}).populate('postId').populate('author').exec(function(err, results) {
						comments = results;
					});
					Post.findOne({slug: slug}).populate('author').populate('comments').exec(function(err, post){
					 	if (err){ res.send(500, err); }
						if(!req.user){
							return res.view('pages/userpage', {
								layout: 'staticlayout',
						      	user: req.user,
						      	id: "",
						      	email: "",
						      	username: "",
						      	picture: "",
						      	slug: "",
						      	post: post,
						      	comments: comments
						    });
						}else{
							return res.view('pages/userpage', {
								layout: 'staticlayout',
						      	user: req.user,
						      	id: req.user.id,
						      	email: req.user.email,
						      	username: req.user.username,
						      	picture: req.user.picture,
						      	slug: req.user.slug,
						      	post: post,
						      	comments: comments
						    });							
						}			    		
					});			

				},

	useredit: function(req, res) {

					if(!req.user){
						return res.view('pages/useredit', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/useredit', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: req.user.username,
					      	picture: req.user.picture,
					      	slug: req.user.slug
					    });							
					}

				},


	usergits: function(req, res) {

					if(!req.user){
						return res.view('pages/usergits', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/usergits', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: req.user.username,
					      	picture: req.user.picture,
					      	slug: req.user.slug
					    });							
					}

				},

	usergitsrecent: function(req, res) {

					if(!req.user){
						return res.view('pages/usergitsrecent', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/usergitsrecent', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: req.user.username,
					      	picture: req.user.picture,
					      	slug: req.user.slug
					    });							
					}

				},


	uservotedup: function(req, res) {

					if(!req.user){
						return res.view('pages/uservotedup', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/uservotedup', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: req.user.username,
					      	picture: req.user.picture,
					      	slug: req.user.slug
					    });							
					}

				},


	usergitlisted: function(req, res) {

					if(!req.user){
						return res.view('pages/usergitlisted', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/usergitlisted', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: req.user.username,
					      	picture: req.user.picture,
					      	slug: req.user.slug
					    });							
					}

				},


	settings: function(req, res) {
					
					if(!req.user){
						return res.view('pages/settings', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/settings', {
					     	layout: 'staticlayout',
					     	user: req.user,
					      	username: req.user.username,
					      	email: req.user.email,
					      	picture: req.user.picture,
					      	slug: req.user.slug,
					      	job: req.user.job,
					      	website: req.user.website
					    });
					}

				},

	account: function(req, res) {
					
					if(!req.user){
						return res.view('pages/account', {
							layout: 'staticlayout',
					      	user: req.user,
					      	username: "",
					      	picture: "",
					      	slug: ""
					    });
					}else{
						return res.view('pages/account', {
					     	layout: 'staticlayout',
					     	user: req.user,
					      	username: req.user.username,
					      	email: req.user.email,
					      	picture: req.user.picture,
					      	slug: req.user.slug
					    });
					}

				},

	followers: function(req, res) {
		var slug = req.params.username;
		var usersCallback = [];

		User.findOneBySlug(slug).exec(function (err, user){
			if(err) return res.serverError(err);

			var followerUsers = user.followerUsers;
			_.each(followerUsers, function(followerUser) {
				usersCallback.push(function(cb) {
					User.findOne({username: followerUser}).exec(function(err, user){
						cb(err, user);
					})
				});
			});
				
			async.parallel(usersCallback,
				function(err, results){
					if(!req.user){
						if(!user){
							return res.view('homepage', {
						      	name: "",
						      	username: "",
						      	picture: "",
						      	slug: "",
						      	followers: "",
						    });
						}else{
							return res.view('pages/followers', {
								layout: 'staticlayout',
								user: user,
								name: user.username,		// user name
								username: "",				// current logged user name
						      	picture: "",
						      	slug: "",
						      	followers: results
						    });								
						}
					}else{
						if(!user){
							return res.view('homepage', {
						      	user: req.user,
						      	name: "",						// user name
						      	username: req.user.username,	// current logged user name
						      	picture: req.user.picture,
						      	slug: req.user.slug,
						      	followers: ""
						    });
						}else{
							return res.view('pages/followers', {
								layout: 'staticlayout',
								user: user,
								name: user.username,			// user name
						      	username: req.user.username,	// current logged user name
						      	picture: req.user.picture,
						      	slug: req.user.slug,
						      	followers: results
						    });								
						}
					}
				}
			);			
		});	
	},

	following: function(req, res) {
		var slug = req.params.username;
		var usersCallback = [];

		User.findOneBySlug(slug).exec(function (err, user){
			if(err) return res.serverError(err);

			var followingUsers = user.followingUsers;
			_.each(followingUsers, function(followingUser) {
				usersCallback.push(function(cb) {
					User.findOne({username: followingUser}).exec(function(err, user){
						cb(err, user);
					})
				});
			});
				
			async.parallel(usersCallback,
				function(err, results){
					if(!req.user){
						if(!user){
							return res.view('homepage', {
						      	name: "",
						      	username: "",
						      	picture: "",
						      	slug: "",
						      	following: "",
						    });
						}else{
							return res.view('pages/following', {
								layout: 'staticlayout',
								user: user,
								name: user.username,		// user name
								username: "",				// current logged user name
						      	picture: "",
						      	slug: "",
						      	following: results
						    });								
						}
					}else{
						if(!user){
							return res.view('homepage', {
						      	user: req.user,
						      	name: "",						// user name
						      	username: req.user.username,	// current logged user name
						      	picture: req.user.picture,
						      	slug: req.user.slug,
						      	following: ""
						    });
						}else{
							return res.view('pages/following', {
								layout: 'staticlayout',
								user: user,
								name: user.username,			// user name
						      	username: req.user.username,	// current logged user name
						      	picture: req.user.picture,
						      	slug: req.user.slug,
						      	following: results
						    });								
						}
					}
				}
			);			
		});
	},

	forgot: function(req, res) {

			if(!req.user){
				return res.view('pages/forgot', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/forgot', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},

	password: function(req, res) {

			if(!req.user){
				return res.view('pages/password', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/password', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},

	add: function(req, res) {

		if(!req.user){
			return res.view('pages/add', {
		      	user: req.user,
		      	username: "",
		      	picture: "",
		      	slug: ""
		    });
		}else{
			return res.view('pages/add', {
		    	layout: 'staticlayout',
		    	user: req.user,
		      	username: req.user.username,
		      	picture: req.user.picture,
		      	slug: req.user.slug
		    });
		}
	},

	trending: function(req, res) {

			if(!req.user){
				return res.view('pages/trending', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/trending', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},

	popular: function(req, res) {

			if(!req.user){
				return res.view('pages/popular', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/popular', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},

	staffgits: function(req, res) {

			if(!req.user){
				return res.view('pages/staffgits', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/staffgits', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},

	recent: function(req, res) {

			if(!req.user){
				return res.view('pages/recent', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/recent', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},

	mostvoted: function(req, res) {

			if(!req.user){
				return res.view('pages/mostvoted', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/mostvoted', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

		},

mostvoted: function(req, res) {

			if(!req.user){
				return res.view('pages/mostvoted', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/mostvoted', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

		},

	//// ADDING HERE NEW PAGE PATH / username/recent, username/top, username/voted/ TEST 0 ////

	g: function(req, res) {

			if(!req.user){
				return res.view('pages/g/edit', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/g/edit', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

	},


		//// Starting Here the User Folder Details and Setting Ups. TEST 1 ///

	name: function(req, res) {

			if(!req.user){
				return res.view('pages/edit', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/edit', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

		},

	name: function(req, res) {

			if(!req.user){
				return res.view('pages/gitlisted', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/gitlisted', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

		},



	years: function(req, res) {

			if(!req.user){
				return res.view('pages/years', {
					layout: 'staticlayout',
			      	user: req.user,
			      	username: "",
			      	picture: "",
			      	slug: ""
			    });
			}else{
				return res.view('pages/years', {
			     	layout: 'staticlayout',
			     	user: req.user,
			      	username: req.user.username,
			      	picture: req.user.picture,
			      	slug: req.user.slug
			    });
			}

		},



//// Ending Up Here the Settings for the User Pages /////




	login: function(req, res) {

		return res.view('pages/login', {
	      layout: 'staticlayout'
	    });

	},
	
	signup: function(req, res) {
		return res.view('pages/signup', {
	      layout: 'staticlayout'
	    });

	}
	
};

