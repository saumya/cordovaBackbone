requirejs.config({
	//To get timely, correct error triggers in IE, force a define/shim exports check.
	enforceDefine: true,
	// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.3.min")
	paths:{
		"cordovaLib" : "../../cordova",
		"localNotification": "../libs/phonegapPlugins/cordova.LocalNotification",
		"pushNotification": "../libs/phonegapPlugins/PushNotification",
		//Underscore
		"underscore": "../libs/lodash-1.2.1",
		//jQuery
		"jquery": "../libs/jquery-2.0.2",
		"jquerymobile": "../libs/jquery.mobile-1.3.1",
		//backboneJS
		"backbone": "../libs/backbone-1.0.0"
	},
	// Sets the configuration for your third party scripts that are not AMD compatible
	shim:{
		'localNotification':{
			deps:['cordovaLib'],
			exports: 'cordova',
			init: function(){
				console.log('Cordova : localNotification : loaded : ');
			}
		},
		'pushNotification':{
			deps:['cordovaLib'],
			exports:'PushNotification',
			init: function(){
				console.log('Cordova : pushNotification : loaded : ');
			}
		},
		'cordovaLib':{
			exports: 'cordova',
			init: function(){
				console.log('Cordova : loaded : ');
			}
		},
		/*
		'underscore':{
			exports: '_',
			init: function(){
				console.log('Underscore : loaded : ');
			}
		},
		'jquery': {
			exports: 'jqueryLib'
		},
		'jquerymobile': {
			deps:['jquery'],
			exports: 'jqueryM'
		}
		*/
		'backbone': {
			exports: 'Backbone',
			init: function(){
				console.log('Backbone : loaded : init : ');
			}
		}
	}
});
//Finally start the Application Entry module
//loading jQueryMobile on the first module, not here.
//Thats just to make sure the default settings are done before loading jquerymobile.
define(['underscore','jquery','localNotification','pushNotification','backbone'],
	function(localUnderscore,localJQuery,localNotification,localPushNotification,localBackbone){
		//console.log('Application Entry');
		require(['view/cordovaEntry'],
			function(CordovaEntry){
				console.log('Application : Entry : $.mobile='+$.mobile);

				/*
				//seems not working in browser. TODO: check it on mobile
			    $(document).on("mobileinit", function(){
			    	console.log('Application : Entry : MobileInit : ');
				    $.mobile.pushStateEnabled = false;
				    $.mobile.ajaxEnabled = false;
				    $.mobile.hashListeningEnabled = false;
				    $.mobile.linkBindingEnabled = false;
				});
				*/
				//set up the defaults for jquery mobile
				$.mobile.pushStateEnabled = false;
				$.mobile.ajaxEnabled = false;
				$.mobile.hashListeningEnabled = false;
				$.mobile.linkBindingEnabled = false;

				//check for libs
				console.log('Application : Entry : Backbone : Start ');
				console.log(Backbone);
				//console.log(backbone);
				console.log(localBackbone);
				console.log('Application : Entry : Backbone : End ');
				//finally move on
				CordovaEntry.initialize();
				
			});
	});