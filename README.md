cordovaBackbone
===============
The basic setup for cordova (phonegap), based modular javascript application. Could be used as a boilerplate for any cordova application which makes use of RequireJS with/without BackboneJS.

##Libraries used :
1. [RequireJS](http://requirejs.org/ "RequireJS")( 2.1.6 )
2. [BackboneJS](http://backbonejs.org/ "BackboneJS") ( 1.0.0 )
3. [Lo-Dash](http://lodash.com/ "Lo-Dash") ( 1.2.1 )
4. [Cordova](http://cordova.apache.org/ "Cordova") ( 2.8.0 )( This is an Android Lib, for iOS add the iOS cordova lib. )
5. [jQuery](http://jquery.com/ "jQuery") ( 2.0.2 )
6. [jQueryMobile](http://jquerymobile.com/ "jQueryMobile") ( 1.3.1 )

There are two separate plugins for Cordova are used, just to know "how cordova plug-ins could be loaded".

How its done:
---------------
This is my personal experimentation result, if any better way is available, please let me know.

##loading
First all the libraries are loaded except jQueryMobile. Once all the libraries are loaded, the defaults for jQueryMobile are configured. Then the first module loads jQueryMobile.
##routing
1. $.mobile.navigate( "#bar" );  // change the URL in location bar
2. $.mobile.changePage( "#two"); // chagne the jquery mobile page