// Reference DOM Elements from index.html
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
    } else if (user.length <= 2) {
        // alert('username has less than 3 characters')
        errorMsg = "Username must have 3 or more characters";
    } 

    if (errorMsg != '') {
        feedback.innerHTML = errorMsg;
        return false;
    }
    
    return true;
}

/**
 * Gets and stores user's input if validateUserInput 
 * function is true and redirects to quiz.html page
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
 * Takes username value stored in url and stores it in a variable
 */
function saveUserName() {
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

// Reference DOM Elements from quiz.html
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitBtn = document.getElementById("submit");

// Array of quiz questions
let questions = [
    {
        questionID: 0,
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
        questionID: 1,
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
        questionID: 2,
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
        questionID: 3,
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
 
/**
 * Shuffles the order of questions in the array of objects using the built in
 * JS array sort() method which swaps one item with the next one, 
 * takes a callback function which returns a random + or - number, 
 */
function randomise(questions) {

    return questions.sort(() => 0.5 - Math.random());
};

// Some of the following code was adapted from https://simplestepscode.com/javascript-quiz-tutorial/

/**
 * Generates the quiz: calls function to shuffle questions, adds HTML radio buttons to each answer,
 * adds each question and its answers to the output list and displays them on the page.
 */
function displayQuiz() {
    // randomises the questions
    randomise(questions);
    
    // stores HTML output
    let output = [];

    // iterates through the array of questions
    for (let i = 0; i < questions.length; i++) {
        
        // stores list of possible answers
        let answers = [];

        // iterates through the list of available answers
        for(letter in questions[i].answers) {
            
            // stores the Question ID for each of the questions in the array
            const questionID = questions[i].questionID;
            
            // adds an HTML radio button and attributes to each of the available answers 
            answers.push(
                `
                <label id="label${[questionID]}_${letter}" class="option">
                    <input type="radio" name="question${[questionID]}" value="${letter}" 
                      onclick="selectOption(${[questionID]}, this.value);">
                    ${questions[questionID].answers[letter]}
                </label>
                `
            );
        }

        // adds the question and its answers to the output
        output.push(
            `
            <div class="exhibit">
            <div id="question${[i]}" class="question-container"> ${questions[i].question} </div>
            <div class="option-container"> ${answers.join('')} </div>
            </div>
            `
        );

    }
    // combines output list into one string of HTML and displays it on the page
    quizContainer.innerHTML = output.join('');    
}

/**
 * Takes two parameters, the question the user is currently on and their selection,
 * gives their selected option a different style to distinguish it from the other unchecked
 * options.
 */
function selectOption(questionID, selection) {
    
    const optionList = 'abcd';
    for (let i = 0; i <= optionList.length - 1; i++) {

        if (optionList[i] == selection) {
            const optionChoice = document.getElementById('label'+questionID+'_'+selection);
            optionChoice.classList.add('radio-checked');
        } else {
            const radioBtn = document.getElementById('label'+questionID+'_'+optionList[i]);
            radioBtn.classList.remove('radio-checked');
        }
    }
    return true;
}



// Define variables and reference DOM Elements
const preBtn = document.getElementById('previous');
const postBtn = document.getElementById('next');
const exhibits = document.getElementsByClassName('exhibit');
let currentExhibit = 0;

/**
 * Shows one question at a time by hiding current question and showing
 * new question.  Shows and hides previous, next and submit buttons depending on 
 * the current question displayed.
 */
function showQuestion(n) {
    exhibits[currentExhibit].classList.remove('active-exhibit');
    exhibits[n].classList.add('active-exhibit');
    currentExhibit = n;

    if(currentExhibit === 0) {
        preBtn.style.display = 'none';
    } else {
        preBtn.style.display = "inline-block";
    }

    if(currentExhibit === exhibits.length - 1) {
        postBtn.style.display = "none";
        submitBtn.style.display = "block";
    } else {
        postBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

// Next button navigation
function showNextQuestion() {
    showQuestion(currentExhibit + 1);
}

// Previous button navigation
function showPreviousQuestion() {
    showQuestion(currentExhibit - 1);
}



// Show previous and next questions when buttons are clicked
if (preBtn != null) { preBtn.addEventListener('click', showPreviousQuestion); }
if (postBtn != null) { postBtn.addEventListener('click', showNextQuestion); }
