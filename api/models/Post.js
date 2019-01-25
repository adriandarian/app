/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
        required: true,
    },

  	url: {
  		type: 'string',
      	required: true,
  	},

  	title: {
      type: 'string',
      required: true
    },

    description: {
      type: 'text',
      required: true
    },

    hashtags: {
      type: 'text',
      required: true
    },
  
    slug: {
      type: 'string'
    },
  	
    // Many-to-One ->Add a reference to User
    author: {
      model: 'user'
    },  

    comments: {
      collection: 'comment',
      via: 'postId'
    },

    votes: {
      type: 'integer'
    },
  },

  beforeCreate: function(post, cb) {
    if(!post.slug) post.slug = post.title.replace(/\s+/g,'-').toLowerCase();        
    if(!post.votes) post.votes = 0;
    return cb(null, post);
  },
};

