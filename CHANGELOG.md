

Gitlist V.0.0.1  <br>

Gitlist Official
<a href="http://www.gitlist.io">gitlist.io</a> 
<br>
Gitlist Landing Page
<a href="http://www.gitlist.io/g/launching">gitlist.io/g/launching</a> 


Contributors of Gitlist 
===========================================================================
// new update Fr.22.April 10:50:46 St. Gallen, Switzerland. by Lucas Gatsas
// http://www.lucasgatsas.ch
===========================================================================

to ignore some files :

- usergits.ejs
- usergitsrecent.ejs
- usergitlisted.ejs
- useredit.ejs
- uservotedup.ejs 
- mostvoted.ejs 
- / These files for the version of 1.0.3 


Go See the Css File :
/**
 * Table of Contents - CSS 
 * ----------------------------------------------------------------------------
 * 0. h 
 * 1. Site Navigation
 * 2. General 
 * 3. Structure // Body @ Line 3341  - // Tables // DATATABLES 
 * 4. BTN
 * 5. Site Navigation
 * 6. Sidebar
 * 7. Content
 *   7.1 Posts and Pages
 *   7.2 Comments
 *   7.3 Paging Navigation
 *   7.4 Post Navigation
 * 8. Footer Widget Area
 * 9. Widgets
 * 10. Site Footer
 * 11. Media Queries  // Tables // Navigation 
 * 12. Rest Part // hashtags
*/

/**
 * 0. Icons
 *
 * Font Awesome by Dave Gandy | http://fontawesome.io
 * ----------------------------------------------------------------------------
 */


 Go See the JS File :

 /**
 * Table of Contents - JS 
 * ----------------------------------------------------------------------------
 * 0. // Add body-small class if window less than 768px
 * 1. // MetsiMenu
 * 2. // Close ibox function
 * 3. // Close ibox function
 * 4. // Fullscreen ibox function
 * 5. // Close menu in canvas mode
 * 6. // Run menu of canvas
 * 7. // Open close right sidebar
 *   // Initialize slimscroll for right sidebar
 *   // Open close small chat
 *   // Initialize slimscroll for small chat
 *   // Small todo handler
 *   // Minimalize menu
 * 8. // Move modal to body
 * 9. // Full height of sidebar
 * 10. // Fixed Sidebar
 * 11. // Move right sidebar top after scroll
 * 12. // Minimalize menu when screen is less than 768px
 * 13. // Local Storage functions
       // Set proper body class and plugins based on user configuration
 * 14. // check if browser support HTML5 local storage
 * 15. // For demo purpose - animation css script
 * 16. // Dragable panels
*/

/**
 * 0. Icons
 *
 * Font Awesome by Dave Gandy | http://fontawesome.io
 * ----------------------------------------------------------------------------
 */


Short Introduction to the Gitlist App : 

/* Pages 

In The View Folder do you find all Pages for the Front End :
https://github.com/SpaceG/gitlist.io/tree/master/views


Work on teh source you can see the pages folder 
there are all front files : 
https://github.com/SpaceG/gitlist.io/tree/master/views/pages


in the partials are the partials for the Pages : 
https://github.com/SpaceG/gitlist.io/tree/master/views/partials


/* Api 

In The Api Folder do you will all 
-controllers 
-models
-responses
-services


/* JS 

in the config folder do you will find the routes.js 
https://github.com/SpaceG/gitlist.io/tree/master/config







// footer for the HomePage example : 

 <!--  footer details 
<footer class="footer">
    <div class="container">
        <ul class="footer-links-list-copyright">
            <li> 
                <%- partial ('partials/gitlist-user-counter.ejs') %>  
           </li>
        </ul>
        <ul class="footer-links-list">
            <%- partial ('partials/gitlist-social-footer.ejs') %>  
            <hr>
        </ul>
    </div>
    <hr/>
    <div class="inner-gitlist-copyright">
        <%- partial ('partials/copyright.ejs') %>  
    </div>
</footer> --> 



//footer for the User Page 

<footer class="footer">
    <div class="container">
        <ul class="footer-links-list-copyright">
            <li> 
              <%- partial ('../partials/gitlist-user-counter.ejs') %>  
            </li>
        </ul>
        <ul class="footer-links-list">
            <%- partial ('../partials/gitlist-social-footer.ejs') %>  
            <hr>
        </ul>
    </div>
    <hr/>
    <div class="inner-gitlist-copyright">
          <%- partial ('../partials/copyright.ejs') %>  
    </div>
</footer> 






