// Script 8.1 - utilities.js
// This script defines an object that has some utilitarian functions.

var U = {
    //Think of an object as a complex variable.
    //That means, it can contain multiple "pieces".
    $: function(id) {
        //Gets the document element for an id
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    },

    addEvent: function(obj, type, fn) {
        //Add event listener to an object
        if (obj && obj.addEventListener) {
            //Current browsers
            obj.addEventListener(type, fn, false);
        }
        else if (obj && obj.attachEvent) {
            //This is for older IE browsers
            obj.attachEvent('on' + type, fn);
        }
    }
};