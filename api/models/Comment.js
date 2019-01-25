/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      author: {
        model: 'user'
      },
      content: 'text',
      post: 'string',
      replyComments: 'array',
      postId: {
        model: 'post'
      },
  },

  beforeCreate: function(comment, cb) {
    if(!comment.replyComments) comment.replyComments = [];
    cb();
  },
};

