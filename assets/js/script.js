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
        window.location.replace('quiz.html?user='+user);     
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
 * Takes two parameters; the question the user is on and their selected answer, 
 * iterates through the options and adds the class of radio-checked to 
 * the option the user has clicked on/selected.
 */
function selectOption(questionNo, selection) {
    
    // creates a variable to store the list of option selections
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

/**
 * Iterates through all quiz questions and checks if each question has a checked radio button,
 * if a question doesn't have a radio button checked, an error message is displayed
 * if all radio buttons are checked, function returns true
 */
function validateChecked() {
    
    let allChecked = true;
    for (let i = 0; i <= questions.length - 1; i++) {
        
        let name = 'question'+[i];
        // if radio button is unchecked it returns an empty string and posts null, meaning
        // allChecked is false
        if (document.querySelector('input[name='+name+']:checked') == null) {
            allChecked = false;
        }
    }

    if (allChecked == false) {
        alert('Please answer all questions.');

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
            
            // creates a variable which will get the correct answer for each current question
            const correctAns = questions[i].correctAnswer;
            //const questionTxt = questions[i].question;

            // creates a variable which will get the question ID of each current question
            const questionID = questions[i].questionID;
            

            let name = 'question'+questionID;

            // stores the value of the selected radio button to the variable
            const selectedAnswer = document.querySelector('input[name='+name+']:checked').value;

            //alert('Question: '+questionTxt+' CorrectAnswer: '+correctAns+' Selected: '+selectedAnswer);
            
            // checks if value of selected answer is equal to the correct answer
            if (selectedAnswer == correctAns)
            {
                // increments the total by 1 
                correctTotal += 1;
            }
        }
        
        //alert(correctTotal +' / '+ questions.length);

        displayResults(correctTotal);

        return true;
    }

    return false;
}

/**
 * Takes the total of correct answers as a parameter and displays it after hiding
 * the game area display.  It calls the saveUserName function to display username in 
 * results area
 * @param {*} correctTotal 
 */
function displayResults(correctTotal) {

    const gameArea = document.getElementById('game-area');
    const resultArea = document.getElementById('result-area');

    gameArea.style.display = 'none';
    resultArea.style.display = 'block';

    document.getElementById('user').innerHTML = saveUserName();
    document.getElementById('result').innerHTML = correctTotal +' out of '+ questions.length;
}

// Store references to navigation buttons and current exhibit
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const exhibits = document.getElementsByClassName('exhibit');
const exhibitNo = document.getElementById('exhibit-num');
const progressBar = document.getElementById('progress-bar');
let currentExhibit = 0;
let exhibitCounter = 1;
let width = 10;

/**
 * Called when next button is clicked, increments by one and displays the question count and
 * the progress bar which is incremented by 10% every time the next button is clicked
 */
function increment() {
    exhibitCounter++;
    exhibitNo.innerText = `${exhibitCounter}`;
    
    width += 10;
    progressBar.style.width = width + '%';
}

/**
 * Called when the previous button is clicked, decrements the question count by 1 and the
 * progress bar by 10% and displays them
 */
function decrement() {
    exhibitCounter--;
    exhibitNo.innerText = `${exhibitCounter}`;
    
    width -= 10;
    progressBar.style.width = width + '%';
}

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

// Call the showPreviousExhibit and the decrement functions when the previous button is clicked
if (previousBtn != null) { 
    previousBtn.addEventListener('click', showPreviousExhibit);
    previousBtn.addEventListener('click', decrement);
}

// Call the showNextExhibit and the increment functions when the next button is clicked
if (nextBtn != null) { 
    nextBtn.addEventListener('click', showNextExhibit); 
    nextBtn.addEventListener('click', increment);
}
