/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'HomeController.index',

  'get /g/login': 'HomeController.login',

  '/login': 'AuthController.login',
  
  '/logout': 'AuthController.logout',

  'get /auth/twitter' : 'AuthController.twitter',

  'get /auth/twitter/callback' : 'AuthController.twitterCallback',

  'get /auth/github' : 'AuthController.github',

  'get /auth/github/callback' : 'AuthController.githubCallback',

  'get /g/signup': 'HomeController.signup',

  '/g/signup': 'AuthController.signup',


  'get /auth/facebook' : 'AuthController.facebook',

  'get /auth/facebook/callback' : 'AuthController.facebookCallback',



  /** Create the route to handle user activations 
  'get /user/:id/activate/:token': {
    controller: 'UserController',
    action: 'activate'
  },*/

/// Password Settings /// 

  'get /g/forgot': 'HomeController.forgot',

  '/forgot': 'AuthController.forgot',

  'get /g/password': 'HomeController.password',
  
  '/password': 'AuthController.password',

/// Gitlist Informationen /// 

  'get /info/about': 'HomeController.about',

  'get /info/contact': 'HomeController.contact',

  'get /info/terms': 'HomeController.terms',

  'get /info/privacy': 'HomeController.privacy',

  'get /info/team': 'HomeController.team',

/// User page Menu Settings /// 

/// Adding ///

'get /:username': 'HomeController.username',

'get /git/:userpage': 'HomeController.userpage',

'get /git/usergits': 'HomeController.usergits',

'get /git/usergitsrecent': 'HomeController.usergitsrecent',

'get /git/uservotedup': 'HomeController.uservotedup',

'get /git/usergitlisted': 'HomeController.usergitlisted',

'get /:username/followers': 'HomeController.followers',

'get /:username/following': 'HomeController.following',

/// User Adding Gits Page ///

'get /g/useredit  ': 'HomeController.useredit',

'get /g/settings': 'HomeController.settings',

'get /g/account': 'HomeController.account',

/// User Adding Gits ///

'get /g/add': 'HomeController.add',

'/add': 'PostController.add',

'/getGits': 'PostController.getGits',

/// Front Page Menu Settings ///

'get /g/mostvoted': 'HomeController.mostvoted',

'get /g/trending': 'HomeController.trending',

'get /g/popular': 'HomeController.popular',

'get /g/staffgits': 'HomeController.staffgits',

'get /g/recent': 'HomeController.recent',

'get /g/mostvoted': 'HomeController.mostvoted',

'get /g/years': 'HomeController.years',


/// Adding  NOW TESTS for SUBFOLDERS and Controllers ///

 'get /g/edit': 'HomeController.g',

/// Adding NEW PAGES HERE 11. Mai 2015 by Lucas Gatsas Test 1 ///

 'get /name/edit': 'HomeController.name',

/// Adding Tests 2 ///

 'get /name/recent': 'HomeController.name',

 'get /test/user': 'UserController.user',

 'get /test/usergits': 'UserController.usergits',

 /// Front Get Launching Page /// 

 'get /g/launching': 'HomeController.launching',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  /// Get User counter /// 
 ///'/getPosts': 'PostController.getPosts',
 
 /// Get User counter /// 
 '/getUsers': 'AuthController.getUsers',

 /// User profile Image upload and save it. /// 
 '/uploadImage': 'UserController.uploadImage',

 /// Get Current logged in User Info /// 
 '/getUser': 'UserController.getUser',

 /// Update Current User Info /// 
 '/updateUser': 'UserController.updateUser',

  /// Find One User by Username /// 
 '/getUserByName': 'UserController.getUserByName',

 /// Update User info by Username /// 
 '/updateFollow': 'UserController.updateFollow',

 /// Get Git by Post slug /// 
 '/getGitBySlug': 'PostController.getGitBySlug',

 /// Add Comment to a post /// 
 '/addComment': 'PostController.addComment', 

 /// Get Comments by a Git /// 
 '/getCommentsByGit': 'PostController.getCommentsByGit',

 /// Add a Reply Comment to a post /// 
 '/addReplyComment': 'PostController.addReplyComment', 

 /// Add a Vote to a post /// 
 '/addVote': 'PostController.addVote', 

 /// Get Gits By Author /// 
 '/getGitsByAuthor': 'PostController.getGitsByAuthor',

 };
