// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateUsername(username, message) {
	//Validates that a username meets
	//the following criteria:
	//1. Must be at least 8 characters long
	//2. First character must be A-Z or a-z
	//3. Must contain at least one digit (0-9)
	//Function returns "true" if all criteria
	//is met, "false" if any criteria not met.

	var char1;
	var hasNumber;

	//Check username length:
	if (username.length < 8) {
		message.valueOf =
			"User name must be at least 8 characters";
		return false;
	}

	//Check first character:
	char1 = username.substr(0, 1).toUpperCase();
	if (!(char1 >= "A" && char1 <= "Z")) {
		message.valueOf =
			"First character must be A-Z or a-z";
		return false;
	}

	//Check for at least one digit/numeral:
	hasNumber = /\d/;
	if (!(hasNumber.test(username))) {
		message.valueOf =
			"User name must contain " +
			"at least one numeral";
		return false;
	}

	//Alternate version
	/*var anyDigits = false;
	 while (!(anyDigits)) {
	 for (var i = 1; i < username.length; i++)
	 {
	 char1 = username.substr(i, 1);
	 if (char1 >= "0" && char1 <= "9")
	 {
	 anyDigits = true;
	 break; //exit for loop, found one!
	 }//end if
	 }//end for
	 if (!(anyDigits)) {
	 return false;
	 }
	 }//end while*/

	//Otherwise, all criteria met:
	return true;
} //end function

function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var userName = U.$('userName');
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

	// Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		error = true;
	}

	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
	//Validate the username using a validation function:
	var msg = "initial message";
	msg = Object(msg);
	if(validateUsername(userName.value, msg)) {
		//The username meets requirements
		removeErrorMessage('userName');
	}
	else {
		//The username is not valid
		addErrorMessage('userName', msg.valueOf);
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}

	// Validate the city:
	if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
		removeErrorMessage('city');
	} else {
		addErrorMessage('city', 'Please enter your city.');
		error = true;
	}

	// Validate the state:
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