// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){

  $(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $("#gitlist-sectionspace1").height();
        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
    });
  });
  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 90) {
          $(".navbar-fixed-bottom").addClass("bottom-nav-collapse");
      } else {
          $(".navbar-fixed-bottom").removeClass("bottom-nav-collapse");
      }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });


  var divs = $('.navbar-fixed-bottom');
  $(window).scroll(function(){
     if($(window).scrollTop()<80){
           divs.stop(true,true).fadeIn("fast");
     } else {
           divs.stop(true,true).fadeOut("fast");
     }
  });


  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
