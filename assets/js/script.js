console.log('Hello World!');

// Reference DOM Elements
const username = document.getElementById("user-input");
const feedback = document.getElementById("feedback");

/**
 * Validates username inserted on the index.html(homepage)
 * and displays error messages if username is invalid
 */
function validateUserInput(user) {
    
    let errorMsg = '';
    
    if (user == '') {
        // alert('username not specified');
        errorMsg = "Please enter a Username";
    } else if (user.length <= 3) {
        // alert('username has less than 3 characters')
        errorMsg = "Username must have more than 3 characters";
    } 

    if (errorMsg != '') {
        feedback.innerHTML = errorMsg;
        return false;
    }

    return true;
}

function getUserName() {

    let user = username.value;

    if (validateUserInput(user)) {
        alert('username validated');
        console.log(user);
    }

    return true;
}