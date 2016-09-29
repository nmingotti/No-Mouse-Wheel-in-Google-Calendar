// ==UserScript==
// @name        Google Calendar Month Scroll Disable
// @namespace   nmingotti@gmail.com
// @version     1.0
// @grant       none
// @author     Nicola Mingotti adapted to GreaseMonkey the code from Ivan Morgillo: http://bit.ly/2dno1Qx
// @include    https://calendar.google.com/*
// @require    http://code.jquery.com/jquery-latest.js 
// ==/UserScript==

// "DOMMouseScroll" is FF specific
// If this turn out to be broken in future, switch to jquery-mousewheel plugin

$('#gridcontainer').on(
   'mousewheel DOMMouseScroll',
   function (e) { e.preventDefault(); 
                 e.stopPropagation(); 
}); 

