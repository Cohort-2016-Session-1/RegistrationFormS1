// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.

function validateForm(e) {
    'use strict';

    if (typeof e == 'undefined') {
        //This is a browser window-generated event
        e = window.event;
    }

    //Get form references:
    var firstName = U.$('firstName');
    var lastName;
    var email;
    var phone;
    var city;
    var state;
    var zip;
    var terms; //We'll populate these later

    //error flag:
    var error = false;

    //Validate the first name using a
    //regular expression:
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
        // Everything between / and / is the expression
        //Any letter A-Z (case insensitive) is valid
        //Spaces, periods, and hyphens are valid
        //name must be 2 - 20 characters long

        //First name matches the expression
        //and is valid
        alert("Valid first name");

    }
    else {
        alert("Invalid first name");
        error = true;
    }

    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    //addEvent requires three pieces of info:
    //1. The object to add the event listener to
    //2. The event to listen for
    //3. The function to call in response to
    //  the event in #2
    U.addEvent(
        U.$('theForm'),
        'submit',
        validateForm);


};