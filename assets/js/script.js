console.log('Hello World!');

// Reference DOM Elements
const username = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitBtn = document.getElementById("submit");

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
 * function is true and redirects to a quiz.html page
 */
function getUserName() {

    let user = username.value;

    if (validateUserInput(user)) {
        // alert('username validated');
        // console.log(user);

        // redirects to quiz.html while storing username in url 
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

    // alert(user);
    console.log(user);

    
    return true;
   
}

// Array of quiz questions

let questions = [
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: {
            a: 'Zeus', 
            b: 'Hermes',
            c: 'Apollo',
            d: 'Sol'
        }, 
        correctAnswer: 'c'
    }, 
    {
        question: "How many elements are there in the periodic table?",
        answers: {
            a: '42', 
            b: '153',
            c: '64', 
            d: '118'
        }, 
        correctAnswer: 'd'
    },
    {
        question: "Which country has the highest life expectancy?",
        answers: {
            a: 'Hong Kong', 
            b: 'Japan',
            c: 'Switzerland', 
            d: 'Iceland'
        }, 
        correctAnswer: 'a'
    },
    {
        question: "Who put a man in space first?",
        answers: {
            a: 'China', 
            b: 'Russia',
            c: 'UK',
            d: 'USA'
        }, 
        correctAnswer: 'b'
    }
];


// Some of the following code was adapted from https://simplestepscode.com/javascript-quiz-tutorial/

/**
 * Generates the quiz: has helper functions which display questions, 
 * accept submissions and show results
 */
function displayQuiz() {
    // stores HTML output
    let output = [];

    // iterates through the array of questions
    for (let i = 0; i < questions.length; i++) {
            
        // stores list of possible answers
            let answers = [];

            // iterates through list of available answers
            for(letter in questions[i].answers) {

                // adds an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${[i]}" value="${letter}">
                        ${questions[i].answers[letter]}
                    </label>`
                );
            }

            // adds the question and the answers to the output
            output.push(
                `<div class="question"> ${questions[i].question} </div>
                <div class="answers"> ${answers.join('')} </div>`
        );

    }

    quizContainer.innerHTML = output.join('');
        
}


/**
 * Runs when user clicks the Get results button
 */
function showResults() {}

// shows quiz questions upon redirection to quiz.html
displayQuiz();

// Shows results when Get Results Button is clicked
submitBtn.addEventListener('click', showResults);