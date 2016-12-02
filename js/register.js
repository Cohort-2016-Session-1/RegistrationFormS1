// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateUsername(username) {
   // Declare variables and constants
   var char1;                     // one character extracted from username
   var anyDigits = false;     // variable to signify presence of digits
   var index  ;                    // loop variable for extracting characters

   // Check for length of username
   if (username.length < 8) {
      alert("ERROR...your username must be at least 8 characters long.");
      username = prompt("Please enter your new username:",ES);
   }

   // Check that first character is a letter
   // Substring function has two arguments: starting position and number of characters
   // Character comparison can determine whether a character is a letter
   char1 = username.substr(0, 1);
   if (!((char1 >= "a" && char1 <= "z") || (char1 >= "A" && char1 <="Z"))) {
      alert("ERROR...the first character of your username must be a letter.");
      username = prompt("Please enter your new username:",ES);
      char1 = username.substr(0, 1);
   }

   // Check that there's at least one digit in the username
   // Substring function has two arguments: starting position and number of characters
   // Character comparison can determine whether a character is a digit

	//Alternative:
	//var hasNumber = /\d/;
	//hasNumber.test(username);
  
   while (!(anyDigits)) {
      // Check each character, set anyDigits to true if a digit
      for (index = 1; index < username.length; index++) {
         char1 = username.substr(index, 1);
         if (char1 >= "0" && char1 <= "9") {
            anyDigits = true;
         }
      }

      // If anyDigits is still false, no digits were present
      if (!(anyDigits)) {
         alert("ERROR...your username must include at least 1 digit.");
      username = prompt("Please enter your new username:",ES);
      }
   }
}

function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		//Everything between / and / is the expression
		//Allows any letter A-Z, case insensitive
		//Allows space, period, hyphen
		//Must be 2-20 characters long
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
	//Validate the user name:
	validateUsername(userName.value);
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}
	
	// Validate the state:
	alert(state.selectedIndex);
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
			addErrorMessage('zip', 'Please enter your zip code.');
		error = true;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number:
	U.enableTooltips('phone');
    
};