// Reference DOM Elements from index.html
const username = document.getElementById('user-input');
const feedback = document.getElementById('feedback');

/**
 * Validates username inserted on the index.html(homepage)
 * and displays error messages if username is invalid
 */
function validateUserInput(user) {
    
    let errorMsg = '';
    
    if (user == '') {
        // alert('username not specified');
        errorMsg = "Please enter a Username";
    } else if (user.length <= Number(2)) {
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
        window.location.replace('../quiz.html?user='+user);     
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
    
    return user;
}

// Reference DOM Elements from quiz.html
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

// Array of quiz questionsco
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
        question: 'Which country has the highest life expectancy?',
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
            c: 'Zloty (&#122;)',
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
    }
];



/** Some of the following code was adapted from https://simplestepscode.com/javascript-quiz-tutorial/
 * Includes two functions, one which shuffles the quiz questions and another which
 * displays the quiz on the page.
 */
function generateQuiz() {
    
    /** https://www.webmound.com/shuffle-javascript-array/
     * Shuffles the order of questions in the array of objects using the built in
     * JS array sort() method which swaps one item with the next one, 
     * takes a callback function which returns a random + or - number. 
     */
    function shuffle(questions) {
        return questions.sort(() => 0.5 - Math.random());
    };

    shuffle(questions);

    /**
     * Gets the questions and answers from the array and displays them on 
     * the page using innerHTML
     */
    function displayQuiz() {
        // variable for questions and answer choices HTML
        const output = [];

        // Iterates through the array of questions 
        for (let i = 0; i < questions.length; i++) {
            
            // variable for list of possible answers storage
            const answers = [];

             // gets the questionID of each question
             const questionID = questions[i].questionID;

            // gives the answer choices for each of the questions
            for(letter in questions[i].answers){

                // add an HTML radio button
                answers.push(
                    `
                    <label id="label${[questionID]}_${letter}" class="radio-label">
                        <input type="radio" name="question${questionID}" value="${letter}" onclick="selectOption(${[questionID]}, this.value);">
                        ${questions[i].answers[letter]}
                    </label>
                    `
                )
            }

            // add question and its answers to the output
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
 * Takes two parameters; the question the user is on and their selected answer, iterates through the 
 * options and adds the class of radio-checked to the option the user has clicked on/selected.
 */
function selectOption(questionNo, selection) {
    
    const optionList = 'abcd';
    for (let i = 0; i <= optionList.length - 1; i++) {

        if (optionList[i] == selection) {
            const optionChoice = document.getElementById('label'+questionNo+'_'+selection);
            optionChoice.classList.add('radio-checked');
        } else {
            const radioBtn = document.getElementById('label'+questionNo+'_'+optionList[i]);
            radioBtn.classList.remove('radio-checked');
        }
    }

    return true;
}

function getResults() {
    
    for (let i = 0; i <= questions.length - 1; i++) {
        const questionTxt = questions[i].question;
        const correctAns = questions[i].correctAnswer;
        const selectedAnswer = document.querySelector('input[name="question'+[i]+'"]:checked').value;
        
        alert('Question: '+questionTxt+' CorrectAnswer: '+correctAns+' Selected: '+selectedAnswer);
    }

    return true;
}

/*
// Loops over the user answers, checks them and shows the results
function showResults() {

    // gather all answer containers in quiz's HTML
    const answerContainers = quizContainer.getElementsByClassName('answers');

    // save user's answer in numCorrect variable
    let numCorrect = 0;

    // iterate through all questions and check answers
    questions.forEach(
        (question[i], questionID) => {

            // looks into the current question's answer container
            const answerContainer = answerContainers[questionNo];
            // defines a CSS selector which will let us find which radio button is checked
            const selector = `input[name=question${questionNo}]:checked`;
            // searches for the CSS selector to find which answer's radio button is checked
            // and get the value of that answer or if there is no checked answer use an ampty object
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if(userAnswer === currentQ.correctAnswer) {

                // add to the number of correct answers
                numCorrect++;

                // color the answers mint
                answerContainers[questionNo].getElementsByClassName.color = '#B8EBD0';

                // if answer is wrong or not answered
            } else {

                // color the answers rose
                answerContainers[questionNo].getElementsByClassName.color = '#EF798A';
            }
        } 
    );

    // show number of correct answers out of total
    resultsContainer.innerHTML = `You scored ${numCorrect} out of ${questions.length}`;
}
*/

// Store references to navigation buttons and current exhibit
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const exhibits = document.getElementsByClassName('exhibit');
let currentExhibit = 0;


/** The following functions were adapted from https://www.sitepoint.com/simple-javascript-quiz/
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

// Allows next button to show next exhibit
function showNextExhibit() {
    showExhibit(currentExhibit + 1);
    
    // brings back the focus to the quiz div/radio button options
    document.getElementById('quiz').focus();
}

// Allows previous button to show previous exhibit
function showPreviousExhibit() {
    showExhibit(currentExhibit - 1);

    // brings back the focus to the quiz div/radio button options
    document.getElementById('quiz').focus();
}


// Prevents page refresh on Enter key for form text input and calls getUserName function
if (document.getElementById("user-input") != null) {
    document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
            event.preventDefault();
            getUserName();
        }
    })
}

// On submit, show results
// if (submitBtn != null) { submitBtn.addEventListener('click', showResults); }

// Shows previous exhibit when previous button is clicked
if (previousBtn != null) { previousBtn.addEventListener('click', showPreviousExhibit); }
if (nextBtn != null) { nextBtn.addEventListener('click', showNextExhibit); }
