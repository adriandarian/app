/*!
     * GitList Version V.0.0.1 (http://gitlist.io)
 	 * Copyright 2014-2015 Gitlist, by Lucas Gatsas and Giancarlo Soverini.
 	 * Licensed under MIT (comingsoonlink) */ 

 /*     - Created by Lucas Gatsas 
 		- https://www.twitter.com/LucasGatsas 

 		- Created by Giancarlo Soverini
		- https://twitter.com/GSoverini

  */

/* Navbar on the Front-End index, and rest Pages */

$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $("#gitlist-sectionspace1").height();
        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
    });
});


/* Searbar for the Search Window on the main Index */

  $(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});



/* Set The Navbar Scroll */

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


/* Google Analisty Tool  */

var _gaq = _gaq || [];

function loadtracking() {
        window._gaq.push(['_setAccount', 'UA-53988504-1']);
        window._gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
}

loadtracking();


/* Navbar Fixed - Bottom  */

var divs = $('.navbar-fixed-bottom');
$(window).scroll(function(){
   if($(window).scrollTop()<80){
         divs.stop(true,true).fadeIn("fast");
   } else {
         divs.stop(true,true).fadeOut("fast");
   }
});

