/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {
  types: {
    password: function(password) {
      return password === this.passwordConfirmation;
    }
  },
  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
      required: false,
      unique: true
    },
    password: {
      type: 'string',
      password : true,
      required: true,
      minLength: 6
    },
    passwordConfirmation: {
      type: 'string'
    },
    state: {
      type: 'string',
      enum: ['pending', 'approved', 'denied'],
      defaultsTo: 'pending'
    },
    provider: {
      type: 'string',
      enum: ['local', 'github', 'twitter'],
      defaultsTo: 'local'
    },
    uid: {
      type: 'string'
    },
    picture: {
      type: 'string',
      defaultsTo: 'path/to/placeholder'
    },
    // One-to-Many -> Add a reference to Posts 
    posts: {
      collection: 'post',
      via: 'author'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.email;
      return obj;
    }
  },

  beforeValidate: function(user, cb){
    if(user.hasOwnProperty('fakeinput')) delete user.fakeinput;
    cb();
  },

  afterValidate : function(user, cb){
    if(user.hasOwnProperty('passwordConfirmation')) delete user.passwordConfirmation;
    cb();
  },
  
  beforeCreate: function(user, cb) {
    if(!user.username) user.username = user.email.split('@')[0];

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb();
        }
      });
    });
  }

};

