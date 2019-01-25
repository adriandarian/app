# gitlist


CHANGELOG.md @ Gitlist


Di. 5.Mai. 2015 by Lucas Gatsas 
<< // See Update // >> 

Added Path in HomeController.js :
==================================


/api/ HomeController.js
========================


    about: function(req, res) {

    return res.view('pages/about', {
        layout: 'staticlayout'
      });

  },

  contact: function(req, res) {

    return res.view('pages/contact', {
        layout: 'staticlayout'
      });

  },

  terms: function(req, res) {

    return res.view('pages/terms', {
        layout: 'staticlayout'
      });

  },

    privacy: function(req, res) {

    return res.view('pages/privacy', {
        layout: 'staticlayout'
      });

  },


    username: function(req, res) {

    return res.view('pages/username', {
        layout: 'staticlayout'
      });

  },

    userpage: function(req, res) {

    return res.view('pages/userpage', {
        layout: 'staticlayout'
      });

  },

  followers: function(req, res) {

    return res.view('pages/followers', {
        layout: 'staticlayout'
      });

  },

  following: function(req, res) {

    return res.view('pages/following', {
        layout: 'staticlayout'
      });

  },

  forgot: function(req, res) {

    return res.view('pages/forgot', {
        layout: 'staticlayout'
      });

  },

    password: function(req, res) {

    return res.view('pages/password', {
        layout: 'staticlayout'
      });

  },


---------- END -----------------------------

Added Path in routes.js:
========================

/config/routes.js
========================


  'get /password': 'HomeController.password',

  'get /about': 'HomeController.about',

  'get /contact': 'HomeController.contact',

  'get /terms': 'HomeController.terms',

  'get /privacy': 'HomeController.privacy',

  'get /username': 'HomeController.username',

  'get /userpage': 'HomeController.userpage',

  'get /followers': 'HomeController.followers',

  'get /following': 'HomeController.following'

---------- END -----------------------------

Added Pages in  views/pages/
==============================

/view/page
========================

- about.ejs
- contact.ejs
- terms.js
- privacy.js 

---------- END -----------------------------





Di. 6.Mai. 2015 by Lucas Gatsas 
<< // See Update // >> 

Added Pages in  views/pages/
==============================

/css changes and all Updates 
=============================


Question why is the jquery or javascript not working in the (homepage.ejs)
file? 











Work Rapport for Gitlist : http://goo.gl/forms/FuWz8V2GjC

a [Sails](http://sailsjs.org) application




sails.js with GIT

Check Out your Branch :
<code> git checkout (yourname) </code>






<code> git status </code>


<code> git add -A  </code>

<code> git commit -m "Your Changes"  </code>

<code> git push  </code>

<code> Username for 'https://github.com': lucasgatsas@gmail.com
 </code>

<code> Password for 'https://lucasgatsas@gmail.com@github.com': 
</code>


<code> git status </code>

<code> sails lift </code>


For a fresh installation
========================

1 - Clone the repo wherever you want

2 - Go to the project folder and type "git checkout *your first name*"

3 - Go to the project folder and type "npm install" or "sudo npm install" if you are a linux user

4 - If you haven't sails installed globally on your machine, type "[sudo] npm -g install sails"

5 - Now you are able to lift the sails app, by typing "sails lift"

6 - Whenever you want to push your commits, type "git push origin *your first name*"

---


Update your Project :n
========================

<code> sudo npm update </code>

<code> sails lift </code>




###Example of error format from a wrong insertion during a REST operation:

```javascript
{
  "error": "E_VALIDATION",
  "status": 400,
  "summary": "2 attributes are invalid",
  "model": "User",
  "invalidAttributes": {
    "email": [
      {
        "rule": "email",
        "message": "`undefined` should be a email (instead of \"\", which is a string)"
      },
      {
        "rule": "required",
        "message": "\"required\" validation rule failed for input: ''"
      }
    ],
    "password": [
      {
        "rule": "minLength",
        "message": "\"minLength\" validation rule failed for input: ''"
      },
      {
        "rule": "required",
        "message": "\"required\" validation rule failed for input: ''"
      }
    ]
  }
}
```	
