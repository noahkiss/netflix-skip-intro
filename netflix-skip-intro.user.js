// ==UserScript==
// @name         Netflix Skip Intro
// @namespace    http://noahkiss.me/
// @author       Noah Kiss
// @description  Auto-skip intro on supported Netflix series
// @version      0.1.5
// @include      https://www.netflix.com*
// @grant        none
// ==/UserScript==


// Define config variables

// Variable in which the time of the last activation of the button is stored
var time_pressed = null;
// Interval in which the button is searched for
var refresh_interval = 800;
// Time interval that is waited before the button can be pressed again
var guard_interval = 10000;

// Netflix css variables
var divname = 'div.skip-credits';
var classname = 'skip-credits-hidden';
var buttonname = 'a.nf-icon-button.nf-flat-button.no-icon';

setInterval(function () {
    'use strict';
    if (!document.querySelector(divname).classList.contains(classname)) {
      var time_delta = new Date() - time_pressed;
      if (time_pressed === null || time_delta > guard_interval) {
        document.querySelector(buttonname).click();
        time_pressed = new Date();
      }
    }
}, refresh_interval);
