/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport();

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  ///email signup per e-mail 
  
  signup: function(req, res){
    var params = req.params.all();
    User.create(params, function(err, user){
      if (err){ res.send(500, err); }else{
        if(sails.config.user.requireUserActivation){
//res.render('email/email.ejs', {user: user}, function(err, list){
            var mailOptions = {
              to: user.email,
              from: sails.config.nodemailer.from,
              subject: 'New Account Created',
//html: list - email attachment 
              html: "<h1>Welcome to Gitlist!</h1> Please go ahead and SignIn to Gitlist. http://www.gitlist.io"
            };
            smtpTransport.sendMail(mailOptions, function(err) {
              if (!err) {
                res.send({
                  message: 'An email has been sent to ' + user.email + ' with further instructions.'
                });
              } else {
                return res.status(400).send({
                  message: 'Failure sending email'
                });
              }
            });    
//});                         
        }else{
          res.send(200, user);
        }
      }
    }); 
  },

/**
 * Activates a given user based on the
 * ID and activationToken provided
 */
  activate: function(req, res){
    var params = req.params.all();

    sails.log.debug('activation action');
    
    //Activate the user that was requested.
    User.update({
      id: params.id,
      activationToken: params.token
    },{
      activated: true
    }, function(err, user) {
      // Error handling
      if (err) {
        sails.log.debug(err);
        res.send(500, err);
      // Updated users successfully!
      } else {
        sails.log.debug("User activated:", user);
        res.send(200, user);
      }
    });

  },
///login local login user
  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
        if ((err) || (!user)) {
            return res.send({
                message: info.message,
                user: req.user,
            });
        }
        req.logIn(user, function(err){
            if (err) res.send(err);
            return res.send({
                message: info.message,
                user: req.user,
            });
        });
    })(req, res);
  
  },
///logout function - 
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },
///twitter call back 
twitter: function(req, res){

    passport.authenticate('twitter')(req,res);

  },
///twitter call back api - coming soon 
  twitterCallback: function(req, res){
		 passport.authenticate('twitter', { failureRedirect: '/g/login' }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view('500');
          return;
        }

        res.redirect('/');
        return;
      });
    })(req, res);

  },
///github call back 
  github: function(req, res){

    passport.authenticate('github')(req,res);

  },
//github call back api - coming sonn 
  githubCallback: function(req, res){    
    passport.authenticate('github', { failureRedirect: '/login' }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view('/');
          return;
        }

        res.redirect('/');
        return;
      });
    })(req, res);

  },


  // oAuth beginning here 

facebook: function(req, res){

  passport.authenticate('facebook')(req,res);

},

facebookCallback: function(req, res){
  	
  passport.authenticate('facebook', { failureRedirect: '/login' }, function(err, user) {
   req.logIn(user, function(err) {
 

     res.redirect('/');
     return;
   });
 })(req, res);

},




///forgot passwort for the e-mail - update 2016 
  forgot: function(req, res){
    var params = req.params.all();
    var mailOptions = {
      to: params.email,
      from: sails.config.nodemailer.from,
      subject: 'Reset Password Required!',
      html: '<p>You can reset the password in <a href="http://www.gitlist.io/g/password?email=' + params.email + '" target ="_blank" title="Reset Password Required">here</a></p>'
    };
    smtpTransport.sendMail(mailOptions, function(err) {
      if (!err) {
        return res.send({
          message: 'An email has been sent to ' + params.email + ' with further instructions.'
        });
      } else {
        return res.status(400).send({
          message: 'Failure sending email'
        });
      }
    });
  },
///passwort update 
  password: function(req, res){
    var params = req.params.all();
    User.update({
      email: params.email
    },{
      password: params.password,
      passwordConfirmation: params.password
    }, function(err, user) {
      if (err) {
        res.send(500, err);
      } else {
        res.send(200, user);
      }
    });
  },
///user counter 
  getUsers: function(req, res){
    User.count({}).exec(function countCB(err, found){
      return res.send(200, found);
    });
  //},
  ///gitlist counter 
   //getPosts: function(req, res){
    //post.count({}).exec(function countCB(err, found){
      //return res.send(200, found);
    //});
  }
};  




