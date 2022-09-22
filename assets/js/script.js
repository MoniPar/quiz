/* exported generateQuiz, selectOption, getResults */

// References to HTML elements and variable assignments
const username = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const exhibits = document.getElementsByClassName('exhibit');
const exhibitNo = document.getElementById('exhibit-num');
const progressBar = document.getElementById('progress-bar');
const alertMsg = document.getElementById('error-msg');
const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');

/**
 * Validates username inserted on the index.html(homepage)
 * and displays error messages if username is invalid
 * @param {*} user user input
 * @returns true
 */
function validateUserInput(user) {
    
    let errorMsg = '';

    // if no user input is inserted
    if (user == '') {

        errorMsg = "Please enter a Username";
    
    // if user input is less than 3 characters 
    } else if (user.length <= Number(2)) {

        errorMsg = "Username must have 3 or more characters";
    } 

    // if errorMsg is not empty
    if (errorMsg != '') {
        // display errorMsg in feedback div on home page
        feedback.innerHTML = errorMsg;
        
        return false;
    }
    
    return true;
}

/**
 * Gets and stores user input if validateUserInput 
 * function is true and redirects to quiz.html page
 */
function getUserName() {

    let user = username.value;

    if (validateUserInput(user)) { 
        // redirects to quiz.html while storing username in url 
        window.location.replace(`quiz.html?user=${user}`);     
    }
}

/**
 * Takes username value stored in url and stores it in a variable
 * @returns user
 */
function saveUserName() {
    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "user"
    let user = params.user; 

    return user;
}

// Array of quiz questions
const questions = [
    {
        questionID: 0,
        question: 'Who was the Ancient Greek God of the Sun?',
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
        question: 'How many elements are in the periodic table?',
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
        question: 'What is a 200&#176; angle called?',
        answers: {
            a: 'Reflex', 
            b: 'Acute',
            c: 'Obtuse', 
            d: 'Right'
        }, 
        correctAnswer: 'a'
    },
    {
        questionID: 3,
        question: 'Who put a man in space first?',
        answers: {
            a: 'China', 
            b: 'Russia',
            c: 'UK',
            d: 'USA'
        }, 
        correctAnswer: 'b'
    },
    {
        questionID: 4,
        question: 'What is the currency of Poland?',
        answers: {
            a: 'Lira (&#8356;)',
            b: 'Drachma (&#8367;)',
            c: 'Zloty (&#122;&#322;)',
            d: 'Euro (&#8364;)'
        },
        correctAnswer: 'c'
    },
    {
        questionID: 5,
        question: 'Which of these companies was formed first?',
        answers: {
            a: 'Netflix',
            b: 'Facebook',
            c: 'Bing',
            d: 'Google'
        },
        correctAnswer: 'a'
    },
    {
        questionID: 6,
        question: 'Who wrote the original "Rocky" film?',
        answers: {
            a: 'Clint Eastwood',
            b: 'Sylvester Stallone',
            c: 'John Avildsen',
            d: 'David Morrell'
        },
        correctAnswer: 'b'
    },
    { 
        questionID: 7,
        question: 'What type of rock is marble?',
        answers: {
            a: 'Igneous',
            b: 'Sedimentary',
            c: 'Basalt',
            d: 'Metamorphic'
        },
        correctAnswer: 'd'
    }, 
    {
        questionID: 8,
        question: 'Pogonophobia is the fear of ...',
        answers: {
            a: 'clowns',
            b: 'beards',
            c: 'pogs',
            d: 'witches'
        },
        correctAnswer: 'b'
    },
    {
        questionID: 9,
        question: 'What shapes are the cells of a honeycomb?',
        answers: {
            a: 'Hexagons',
            b: 'Circles',
            c: 'Spheres',
            d: 'Pentagons'
        },
        correctAnswer: 'a'
    }
];

let currentExhibit = 0;
let exhibitCounter = 1;
let width = 10;


// Some of the following code was adapted from https://simplestepscode.com/javascript-quiz-tutorial/

/** 
 * Includes two functions, one which shuffles the quiz questions and another which
 * displays the quiz on the page.
 */
function generateQuiz() {
    
    /** 
     * Shuffles the order of questions in the array of objects using the built in
     * JS array sort() method which swaps one item with the next one and 
     * takes a callback function which returns a random + or - number. 
     */
    function shuffle(questions) {
        // Taken from https://www.webmound.com/shuffle-javascript-array/
        return questions.sort(() => 0.5 - Math.random());
    }

    shuffle(questions);

    /**
     * Gets the questions and answers from the array and displays them on 
     * the page using innerHTML
     */
    function displayQuiz() {
        // variable for questions and answer choices
        const output = [];

        // iterates through the array of questions 
        for (let i = 0; i < questions.length; i++) {
            
            // variable for list of possible answers
            const answers = [];

            // gets the questionID of each question
            const questionID = questions[i].questionID;

            // iterates through the answer options for each question
            for (let letter in questions[i].answers) {

                // adds and HTML radio button and label with attributes for each answer option
                answers.push(
                    `
                    <label id="label${[questionID]}_${letter}" class="radio-label">
                        <input type="radio" name="question${questionID}" value="${letter}" 
                            onclick="selectOption(${[questionID]}, this.value);">
                        ${questions[i].answers[letter]}
                    </label>
                    `
                );
            }

            // creates HTML divs to contain the questions and answers and adds the answers to the output 
            output.push(
                `
                <div class="exhibit">
                    <div id="question${[questionID]}" class="question"> ${questions[i].question} </div>
                    <div id="answers${[i]}" class="answers"> ${answers.join('')} </div>
                </div>
                `
            );
        }

        // combine output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');    
    }
    
    displayQuiz();
}

/** 
 * Iterates through the options and adds the class of radio-checked to the option 
 * the user has clicked on/selected, while removing the radio-checked class
 * from any previously selected radio button which becomes unchecked by default.
 * @param questionNo the question the user is on
 * @param selection the user's selected answer
 */
function selectOption(questionNo, selection) {
    // stores the list of option selections in a variable to iterate through them
    const optionList = ['a', 'b', 'c', 'd'];
    for (let i = 0; i <= optionList.length - 1; i++) {

        if (optionList[i] == selection) {
            const optionChoice = document.getElementById(`label${questionNo}_${selection}`);
            optionChoice.classList.add('radio-checked');
        } else {
            const radioBtn = document.getElementById(`label${questionNo}_${optionList[i]}`);
            radioBtn.classList.remove('radio-checked');
        }
    }
}

/**
 * Iterates through all quiz questions and checks if each question has a checked radio button.
 * @returns true
 * If a question doesn't have a radio button checked, an error message is displayed.
 */
function validateChecked() {
    
    let allChecked = true;

    // Calls function to get username from url and assigns it to a variable
    let user = saveUserName();

    for (let i = 0; i <= questions.length - 1; i++) {
        
        let name = `question${[i]}`;
        // if radio button is unchecked (returns an empty string and posts null),
        // then sets allChecked to false
        if (document.querySelector(`input[name='${name}']:checked`) == null) {
            allChecked = false;
        }
    }

    if (allChecked == false) {
        alertMsg.innerHTML = `Hey ${user}, did you answer all questions?`;

        return false;
    }

    return true;
}

/**
 * If validateChecked function returns true, loops through all the questions and checks 
 * their value against the correct answer, if correct it increments the score by 1 and
 * calls the displayResults function taking the total score as a parameter.
 */
function getResults() {

    if (validateChecked()) {

        let correctTotal = 0;
        for (let i = 0; i <= questions.length - 1; i++) {
            
            // assigns a variable to the correct answer for each current question
            const correctAns = questions[i].correctAnswer;
            
            // assigns a variable to the question ID of each current question
            const questionID = questions[i].questionID;
            
            let name = `question${questionID}`;
            // stores the value of the selected radio button to the variable
            const selectedAnswer = document.querySelector(`input[name='${name}']:checked`).value;

            // checks if value of selected answer is equal to the correct answer
            if (selectedAnswer == correctAns)
            {
                // increments the total by 1 
                correctTotal += 1;
            }
        }

        displayResults(correctTotal);
    }
}

/**
 * Displays the total of correct answers after hiding the game area display.  
 * Calls the saveUserName function to display username in results area.
 * @param {*} correctTotal the total of correct answers
 */
function displayResults(correctTotal) {

    // References HTML elements locally
    const gameArea = document.getElementById('game-area');
    const resultArea = document.getElementById('result-area');
    const result = document.getElementById('result');
    const icon = document.getElementById('icon');
    const comment = document.getElementById('comment');

    let user = saveUserName();

    // replace quiz questions with results
    gameArea.style.display = 'none';
    resultArea.style.display = '';
    result.innerText = `${correctTotal} out of ${questions.length}`;

    // if 10 out of 10 questions are correct
    if (correctTotal == questions.length) {
        // display trophy icon
        icon.innerHTML = `
        <i class="fa-solid fa-trophy" aria-hidden="true" title="Trophy" id="trophy">
        <span class="sr-only">Trophy</span>
        `;
        // display comment 
        comment.innerText = `
            You're a Quizzified Master 
            ${user}
        `;
        
        // if correct questions is between 6 and 9  
    } else if (correctTotal < (questions.length) && correctTotal > (questions.length / 2)) {
        // display Medal
        icon.innerHTML = `
        <i class="fa-solid fa-award" aria-hidden="true" title="Medal" id="medal">
        <span class="sr-only">Medal</span>
        `;
        // display comment
        comment.innerText = `
            Pretty, pretty, pretty good 
            ${user}
        `;
       
        // otherwise (5 or less questions correct)
    } else {
        // display sad, crying face
        icon.innerHTML = `
        <i class="fa-regular fa-face-sad-tear" aria-hidden="true" title="Crying face" id="crying">
        <span class="sr-only">Crying Face</span>
        `;

        // display comment
        comment.innerText = `
            What planet are you living on
            ${user}?
        `;
    }
}

/**
 * Called when next button is clicked, increments by one and displays the question count and
 * the progress bar which is incremented by 10% every time the next button is clicked
 */
function increment() {
    exhibitCounter++;
    exhibitNo.innerText = `${exhibitCounter}`;
    
    width += 10;
    progressBar.style.width = `${width}%`;
}

/**
 * Called when the previous button is clicked, decrements the question count by 1 and the
 * progress bar by 10% and displays them
 */
function decrement() {
    exhibitCounter--;
    exhibitNo.innerText = `${exhibitCounter}`;
    
    width -= 10;
    progressBar.style.width = `${width}%`;
}


// The following functions were adapted from https://www.sitepoint.com/simple-javascript-quiz/

/** 
 * Shows one exhibit (question and its set of options) at a time 
 */
function showExhibit(n) {

    // hides the current exhibit by removing the active-exhibit class
    exhibits[currentExhibit].classList.remove('active-exhibit');
    // shows the new exhibit by adding the active-exhibit class
    exhibits[n].classList.add('active-exhibit');
    // updates the current exhibit's number
    currentExhibit = n;

    // if user is on the first exhibit, hide the previous button else show it
    if(currentExhibit === 0) {
        previousBtn.style.display = 'none';
    } else {
        previousBtn.style.display = 'inline-block';
    }

    // if user is on the last exhibit, hide the next button and show the submit button
    // else show the next button and hide the submit button
    if(currentExhibit === exhibits.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

/**
 * Called when next button is clicked; shows next exhibit and brings the focus
 * back to the quiz div and answer options (radio buttons)
 */
function showNextExhibit() {
    showExhibit(currentExhibit + 1);

    document.getElementById('quiz').focus();
}

/**
 * Called when previous button is clicked; shows previous exhibit and brings the focus
 * back to the quiz div and answer options (radio buttons)
 */
function showPreviousExhibit() {
    showExhibit(currentExhibit - 1);
    
    document.getElementById('quiz').focus();
}


// Prevents page refresh on Enter key for form text input and calls getUserName function
if (document.getElementById("user-input") != null) {
    document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
            event.preventDefault();
            getUserName();
        }
    });
}


// Call the showNextExhibit and the increment function when the next button is clicked
if (nextBtn != null) { 
    nextBtn.addEventListener('click', showNextExhibit); 
    nextBtn.addEventListener('click', increment);
}

// Call the showPreviousExhibit and the decrement function when the previous button is clicked
if (previousBtn != null) { 
    previousBtn.addEventListener('click', showPreviousExhibit);
    previousBtn.addEventListener('click', decrement);
}