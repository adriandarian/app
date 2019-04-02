# Gitlist App

[*See the Node Module in Action!*](http://www.gitlist.io)
[*The Gitlist Landing Page*](http://www.gitlist.io/g/launching)

![Gitlist Dashboard](https://raw.githubusercontent.com/SpaceG/gitlist.io/1367ef625b727482498b6dc6f1c494c8bc34a4b7/assets/images/gl-1212-1.png)

## Step One: Install NodeJS

See The Module at NPM: [Gitlist @ Npm.js](https://www.npmjs.com/package/gitlist)

### Mac OSX

There are two options:

+ Downloadable Package: [Nodejs](https://nodejs.org/download/)
+ Homebrew **(recommended)**: [Nodejs](https://github.com/Homebrew/homebrew/)

You can execute either of the commands after the above setup:

```bash
$ brew install node
$ port install nodejs
```

### Linux

_This example installation was ran on `Ubuntu Mint`_

```bash
$ sudo apt-get install python-software-properties python g++ make
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

This will install the current stable Node version. Quantal (12.10) users may need to install the `software-properties-common` package for the `add-apt-repository` command to work: 

```bash
$ sudo apt-get install software-properties-common
```

There is a naming conflict with the node package (Amateur Packet Radio Node Program) and the nodejs binary has been renamed from node to nodejs. You will need to symlink `/usr/bin/node` to `/usr/bin/nodejs` or you could uninstall the Amateur Packet Radio Node Program to avoid that conflict.

-----

## Step Two: Install MongoDB

For this we have chosen [MongoDB](https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.4.tgz)

### Mac OSX

Update Homebrew’s package database.

```bash
$ brew update
$ brew install mongodb --with-openssl --devel
```

### Linux

Install MongoDB Community Edition Manually. You can download the binaries from [here](https://www.mongodb.org/downloads). Then execute the following in a terminal:

```bash
$ curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.4.tgz
$ tar -zxvf mongodb-osx-x86_64-3.2.4.tgz
```

-----

## Step Three: Setup Transport Layer Security - Secure Sockets Layer (SSL)

### Linux

```bash
$ wget http://www.openssl.org/source/openssl-1.0.2a.tar.gz
$ tar -xvzf openssl-1.0.2a.tar.gz
$ cd openssl-1.0.2a
$ ./config --prefix=/usr/
$ make
$ sudo make install
```

### Mac OSX

```bash
$ wget http://www.openssl.org/source/openssl-1.0.2a.tar.gz
$ tar -xvzf openssl-1.0.2a.tar.gz
$ cd openssl-1.0.2a
$ ./Configure darwin64-x86_64-cc --prefix=/usr
$ make
$ sudo make install
```

### Verify the Installation

Verify that you have successfully installed OpenSSL.

```bash
$ openssl version -a
```

-----

## Step Four: Lift the App

First clone the [project](https://github.com/SpaceG/gitlist.io.git). Then install the required node packages, i.e. `Sails` and all listed dependencies in the `package.json`. Afterwards, install MongoDB through the terminal.

Check out the installation guide: [Install Gitlist](https://www.youtube.com/watch?v=mOZGPi0grTw)

```bash
$ git clone https://github.com/SpaceG/gitlist.io.git
$ npm install
$ sudo npm -g install sails
$ npm install sails-mongo --save
$ sudo sails lift
```

To either report an issue or check out previously reported issues: [Gitlist Issues](https://github.com/SpaceG/gitlist.io/issues)

-----

## Step Five: Install and Run the Module Package

Open a new terminal window and execute the following in order:

```bash
$ npm install gitlist
$ sudo gitlist
```

-----

## Programming Languages

+ [HTML5](https://en.wikipedia.org/wiki/HTML5)
+ [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
+ [Less](https://en.wikipedia.org/wiki/Less_(stylesheet_language))
+ [Javascript](https://en.wikipedia.org/wiki/JavaScript)
+ [jquery](https://en.wikipedia.org/wiki/JQuery)
+ [JSON](https://en.wikipedia.org/wiki/JSON)
+ [C/C++](https://en.wikipedia.org/wiki/C%2B%2B)
+ [make](https://en.wikipedia.org/wiki/Make_(software))
+ [XML](https://en.wikipedia.org/wiki/XML)
+ [YAML](https://en.wikipedia.org/wiki/YAML)
+ [PERL](https://en.wikipedia.org/wiki/Perl)
+ [CoffeeScript](https://en.wikipedia.org/wiki/CoffeeScript))
+ [D](https://en.wikipedia.org/wiki/D#Computing_codes)
+ [Bourne Again Shell](https://en.wikipedia.org/wiki/Bourne_shell)
+ [Bourne Shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
+ [Ruby](https://en.wikipedia.org/wiki/Ruby_on_Rails)
+ [DOS Batch](https://en.wikipedia.org/wiki/Batch_file)
+ [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
+ [Handlebars](https://en.wikipedia.org/wiki/Handlebars_(template_system))
+ [RobotFramework](https://en.wikipedia.org/wiki/Robot_Framework)
+ [Lisp](https://en.wikipedia.org/wiki/Lisp)
+ [Sass](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))

## Frameworks

+ [Bootstrap 3](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)): Robust Front-End Framework
+ [Sails.js](http://sailsjs.org/documentation/concepts/): MVC Realtime Framework
+ [Backbone.js](https://en.wikipedia.org/wiki/Backbone.js)
+ [Underscore.js](https://en.wikipedia.org/wiki/Underscore.js)
+ [Node.js](https://en.wikipedia.org/wiki/Node.js): Source for Virtual Servers
+ [Nginx](https://en.wikipedia.org/wiki/Nginx): Webserver-Software, Reverse Proxy und E-Mail-Proxy
+ [oAuth](https://en.wikipedia.org/wiki/OAuth) - GitHub and Twitter Api: Let user to sign with Twiiter + Github
+ [passport.js](http://passportjs.org/): Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
  
```javascript
passport.authenticate('SERVICE_NAME');
```

## Virtual Servers

+ [DigitalOcean](https://en.wikipedia.org/wiki/DigitalOcean): Servers in San Francisco, New York, Singapore
+ [Nginx](https://en.wikipedia.org/wiki/Nginx): Webserver-Software, Reverse Proxy und E-Mail-Proxy
+ [Node.js](https://en.wikipedia.org/wiki/Node.js): Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
+ [Mean.io](http://mean.io/#!/): The Friendly & Fun Javascript FullStack for your next web application MEAN is an opinionated FullStack javascript framework - which simplifies and accelerates web application development.
+ [MongoDB](https://en.wikipedia.org/wiki/MongoDB): Is a cross-platform document-oriented database. Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster.
+ [Linux Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_(operating_system)): Operating System
+ [Linux Ubuntu 14.04 LTS Virtual Machine](http://www.ubuntu.com/server): Scale out with Ubuntu Server
+ [Linux/ Unix](https://en.wikipedia.org/wiki/Unix)
+ [Mac OSX](https://en.wikipedia.org/wiki/Mac_OS)
+ [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows)

## Security

+ [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL): Certificate - Security
+ Lindes of Code **678'134**: Web App in Code of Lines

-----

Copyright (c) 2014 - 3000 Gitlist, Lucas Gatsas. Lucas Gatsas Software
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT ©.2016 by Gitlist HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT GITLIST HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.