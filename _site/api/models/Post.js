/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	url: {
  		type: 'string',
      	required: true,
      	unique: true
  	},

  	title: {
      type: 'string',
      required: true,
    },
  	// Many-to-One ->Add a reference to User
    author: {
      model: 'user'
    }

  }
};

