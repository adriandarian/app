define([
  'jquery',
  'underscore',
  'backbone',
  //'views/sidebar/SidebarView',
  //'text!templates/home/homeTemplate.html'
], function($, _, Backbone){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    data : {

    },

    template : JST["assets/templates/home/homeTemplate.html"],

    render: function(){
      
      // Compile the template using underscore
      var template = _.template( this.template(), this.data );
      //$('.menu li').removeClass('active');
      //$('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(template);
 
    }

  });

  return HomeView;
  
});
