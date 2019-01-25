#!/usr/bin/env node

// Commander  - Added on So. 8.Mai 06:54:13 2016 
// See with $ sudo gitlist lift 

   
 "use strict";   
     
 const Tilda = require("tilda")    
    
 let parser = new Tilda(`${__dirname}/package.json`)   
    
 parser.action({   
    name: "gitlist"   
  , desc: "Starts the app."   
  , description: "Gitlist.io OS - Open Source Gitlist App"    
  , documentation: "https://github.com/SpaceG/gitlist.io"   
    , examples: [   
        "gitlist'Hello there!'"   
      , "gitlist --help"    
     , "gitlist - list the App on localhost 127.0.0.1"   
   ]   
});
var program = require('commander');

var clc = require('cli-color');
var msg = clc.xterm(39).bgXterm(236);
console.log(msg(' -Welcome to \n Gitlist OS'));
console.log(' - Version: 1.0.5');
console.log(' - www.gitlist.io');
console.log(' - Open Source for the Main gitlist');


// Completed Progressbar  - Added on So. 8.Mai 07:27:23 2016 
// See the Progress bar 
var ProgressBar = require('progress');
 
var bar = new ProgressBar('completed [:bar] :percent :etas', { total: 100 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);


// Make sure that no matter where we call the command from,
// we lift the app that lives in the same directory as this script
process.chdir(__dirname);
// Get an instance of Sails
var sails = require('sails');
// Lift the Sails app in the current working directory
       console.log("Start The GITLIST App");
        console.log("To see your app. visit:");
        console.log(clc.xterm(39).bgBlack.underline('http://127..0.0.1'));
        console.log("To Clone the Repository and Open Source:");
        console.log(clc.xterm(39).bgBlack.underline('see: http://www.github.com/spaceg/github.io'));
        console.log("Bash The Universe by Lucas Gatsas.");
        console.log("©.2016 by Gitlist OS");

        console.log("press c to stop the app");


sails.lift({log:{noShip: true}});

/*  sails.lift(rc('sails'));*/









