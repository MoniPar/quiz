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

/**
 * Gets and stores user's input if validateUserInput 
 * function is true
 */
function getUserName() {

    let user = username.value;

    if (validateUserInput(user)) {
        // alert('username validated');
        // console.log(user);

        // stores username in url 
        window.location.replace('../../quiz.html?user='+user);
    }

    return true;
}

/**
 * Gets username value stored in url and redirects it to quiz.html
 */
function redirectUserName() {
    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let user = params.user; // "user"

    alert(user);
    console.log(user);

    return true;
}