cordovaBackbone
===============

The basic setup for cordova (phonegap), based application. Could be used as a boilerplate for any cordova application which makes use of RequireJS and BackboneJS.

Libs :
1. RequireJS ( 2.1.6 )
2. BackboneJS ( 1.0.0 )
3. Lo-Dash ( 1.2.1 )
4. Cordova ( 2.8.0 )( This is an Android Lib, for iOS add the iOS cordova lib. )
5. jQuery ( 2.0.2 )
6. jQueryMobile ( 1.3.1 )

There are two separate plugins for Cordova are used, just to know "how cordova plug-ins could be loaded".

How its done:
---------------

First all the libraries are loaded except jQueryMobile. Once all the libraries are loaded, the defaults for jQueryMobile are configured. Then the first module loads jQueryMobile.