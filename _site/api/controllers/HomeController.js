/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	_config: {
	    actions: false,
	    shortcuts: false,
	    rest: false
  	},

	index: function(req, res) {

		return res.view('homepage', {
	      user: req.user
	    });

	},

	launching: function(req, res) {

		return res.view('pages/launching', {
	      layout: 'staticlayout'
	    });

	},


		about: function(req, res) {

		return res.view('pages/about', {
	      layout: 'staticlayout'
	    });

	},

	contact: function(req, res) {

		return res.view('pages/contact', {
	      layout: 'staticlayout'
	    });

	},

	terms: function(req, res) {

		return res.view('pages/terms', {
	      layout: 'staticlayout'
	    });

	},

		privacy: function(req, res) {

		return res.view('pages/privacy', {
	      layout: 'staticlayout'
	    });

	},


		username: function(req, res) {

		return res.view('pages/username', {
	      layout: 'staticlayout'
	    });

	},

		userpage: function(req, res) {

		return res.view('pages/userpage', {
	      layout: 'staticlayout'
	    });

	},

		useredit: function(req, res) {

		return res.view('pages/useredit', {
	      layout: 'staticlayout'
	    });

	},


	followers: function(req, res) {

		return res.view('pages/followers', {
	      layout: 'staticlayout'
	    });

	},

	following: function(req, res) {

		return res.view('pages/following', {
	      layout: 'staticlayout'
	    });

	},

	forgot: function(req, res) {

		return res.view('pages/forgot', {
	      layout: 'staticlayout'
	    });

	},

		password: function(req, res) {

		return res.view('pages/password', {
	      layout: 'staticlayout'
	    });

	},

	add: function(req, res) {

		return res.view('pages/add', {
	      layout: 'staticlayout'
	    });

	},

	trending: function(req, res) {

		return res.view('pages/trending', {
	      layout: 'staticlayout'
	    });

	},


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

