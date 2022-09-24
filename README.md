
# Quizzified Online Quiz

Welcome to Quizzified! Quizzified is an online quiz game which tests the general knowledge of players young and old.  The set of questions are randomly generated to give returning players a slightly different experience. Each question is presented with four choice answers out of which only one answer is correct. Players are presented with their score after answering all questions, however it is not specified which answers they get right or wrong.  Instead they are encouraged to take the quiz again to better their score.   

![Quiz responsiveness on multiple screen sizes](assets/documentation/quizzified-responsive.png)

[Visit the Quizzified online quiz here](https://monipar.github.io/quiz/)

___

# Table of Contents

1. [Overview](#overview)
2. [Features](#features)  
    * [Index / Home Page](#index--home-page)
    * [Quiz Page](#quiz-page)
    * [Score Display](#result-page)
    * [Future Features](#future-features)
3. [User Experience (UX)](#user-experience-ux)
    * [Strategy / Site Goals](#strategy--site-goals)
    * [Scope / User Stories](#scope--user-stories)
    * [Structure / Design Choices](#structure--design-choices)
    * [Skeleton / Wireframes](#skeleton--wireframes)
    * [Surface](#surface)
4. [Technologies](#technologies)
5. [Testing](#testing)
    * [Validator Testing](#validator-testing)
    * [Lighthouse Testing](#lighthouse-testing)
    * [Manual Testing](#manual-testing)
6. [Bugs](#bugs)
7. [Citation of Sources](#citation-of-sources)
    * [Content](#content)
    * [Media](#media)
8. [Acknowledgements](#acknowledgements)

---

# Overview

The aim of this project is to demonstrate skills in HTML, CSS and JavaScript.  

It is a mobile-first build and is responsive on tablet and desktop. Quizzified is compatible with Chrome, Firefox, Edge and Safari.

The quiz consists of ten questions, with four answer options, of which only one is correct.  It is interactive and accessible by keyboard navigation and screen readers.   

The online quiz was primarily intended to test a group of thirteen to fifteen year old students, on the various subjects they were studying in school.  Its purpose was to encourage them to research the questions they were unsure about and keep taking the quiz until they got a perfect score. Teachers, staff members and family members also took the challenge and found that it also helped them to learn a few more historical, scientific, mathematical and popular culture facts they didn't know. 

---

# Features

## Existing Features

### Index / Home Page

    iPhone 6/7/8
![Home Page on screen from 320px wide](assets/documentation/home-mobile_50.png)

    Laptop 1024px wide
![Home Page on screen 1024px wide](assets/documentation/home-laptop_25.png) 

The Home Page consists of the following features:

* A Header

The Header, which displays the name of the quiz, is present on all pages.  It is a link by which the user can navigate back to the Home Page at any moment of the game and restart the quiz.  It is keyboard focusable and has a tooltip when hovered on to show the user that it is a link which will bring them back to start.

![Header Tooltip](assets/documentation/header-link.png)

* The Logo

The Logo is displayed on the main area of the Home Page as an image.  It consists of a glitched out letter 'Q', the name 'Quizzified' and the slogan 'Stimulate your mind'.  These three components are colourful and produce a good contrast against the dark background of the image.  It is meant to be eye-catching and playful, and gives the quiz a distinguished look.   

* Text and Username input

The main area also features a question to entice the user while also specifying that they are going to be tested on General Knowledge questions.

A text input field invites the user to enter a username in order to start the game.  An error message is displayed under the input field if the user tries to start the game without inserting a valid username. If the username is valid, the user can press the 'Enter' key on their keyboard or navigate to the button below to start the quiz.

![Error message 1 for invalid username](assets/documentation/home-errormsg1.png)

![Error message 2 for invalid username](assets/documentation/home-errormsg2.png)

* A Start Button

The Start Button is an important feature on the Home Page.  It is large and provides optimal contrast against the light coloured background.  It scales up and changes colour when it is hovered or focussed on. 

* A Footer

The Footer is located at the bottom of all pages of the site.  It provides links to relevant developer pages, displayed as social icons.  They change colour when hovered or focussed on, open in a new tab and contain descriptive labels for screen readers.  Copyright and developer information are also displayed in the Footer.  

## Quiz Page

![Quiz Page Mobile]()

![Quiz Page Tablet]()

![Quiz Page Laptop]()

The Quiz Page displays the Header and Footer.  The Main area consists of the following features:

* A question counter and a progress bar

These are displayed at the top of the quiz container.  The question counter counts the questions out of 10.  This is useful for the player to know which question they are on and how many are left.

The Progress Bar is a graphic representation of the above.  A percentage of the capsule shaped bar fills up when the user clicks on the next button and empties when the previous button is clicked. 

![Question counter and progress bar half full]()

![Question counter and progress bar full]()

* A question and a block of answer options

Each quiz question is displayed one at a time and a set of options are presented below for the player to pick an answer.  Each answer option consists of a radio buttons with a label, styled to look like buttons.  The player can click on the word or on the stylish radio button and it will produce the same effect.  These buttons have a focus and hover effect.  When clicked or selected each button changes colour while the radio button has a slight animation to show that it is being checked.  A keyboard user can easily navigate through the  answer options with the 'arrow keys' and make their selection with the 'space' or 'enter' key.  They can then continue tabbing to the navigation buttons.

![Radio buttons and selection]()

* Navigation and Results Buttons

These are displayed at the bottom of the quiz container.  The Next button displayed on the right appears with the first question, while the previous button becomes visible on the left when the user navigates to the second question.  The Results button appears when the user gets to the last question of the quiz.  These buttons all have a hover and focus effect.  When a keyboard user clicks on the next or previous button and is directed to the next or previous question, the focus is brought back to the top.  This is helpful for the user as they don't have to navigate their way back to the answer options using the 'tab' and 'shift' keys.  It also makes the tabbing order more intuitive as one always expects the first tab to bring focus on the top when on a new question. 

## Result Page

## Future Features

[Back to Top](#table-of-contents)

---

# User Experience (UX)

## Strategy / Site Goals
The main goal of the online quiz game is to provide users with a set of questions that tests their knowledge about various subjects. 

## Scope / User Stories

## Structure / Design Choices

## Skeleton / Wireframes

## Surface

[Back to Top](#table-of-contents)

---

# Technologies

## Languages

## Libraries & Frameworks

## Tools

[Back to Top](#table-of-contents)

---

# Testing

## Validator Testing

#### [HTML Validator](https://validator.w3.org/)

* index.html

Document checking completed. No errors or warnings to show.

* quiz.html

Document checking completed. No errors or warnings to show.

#### [CSS Validator](https://jigsaw.w3.org/css-validator/)

Congratulations! No Error Found.

#### [JavaScript Validator](https://jshint.com/)



---

## Lighthouse Testing

---

## Manual Testing


[Back to Top](#table-of-contents)

---

# Bugs

* Unchecked runtime.lastError: The message port closed before a response was received

The above error showed up in Chrome Dev Tools. 
A quick search showed that certain browsers might be causing the problem. This [blog by Akash Mittal](https://akashmittal.com/unchecked-runtime-lasterror-message-port-closed/) provided a solution. 

Solution: All extensions were disabled and upon refresh the error was gone.  Extensions were then enabled one by one, each time checking for errors. The Malwarebytes Browser Guard seemed to be the cause of this.

* When trying to check if the validateUserInput() function was working, the page refreshed every time the start/Quizzify Me button was clicked.  No errors or warnings show up in the console and no expected alerts. [Stackoverflow](https://stackoverflow.com/questions/44681646/the-page-will-strangely-refresh-when-i-click-the-button) helped figure out why.

Solution: `<input type="submit">` submits the form data to the server and refreshes the page.  If `type="submit"` is removed, it will still behave in the same way since it is a form element.  In order to stop this refresh, it was changed to `<input type="button">`. 

* The function validateUserInput() was passing the errorMsg "Username must have 3 or more characters", when 3 characters were inputted in the text field.  This is due to the fact that user.length is index based and thus was counting from 0.  

Solution: The else if statement was changed to `(user.length <= 2)`

* The Start/Quizzify Me button directs the user to the quiz page after inputting a valid username. However if the user pressed the enter key after typing their username, the page was being refreshed.  

Solution: The following code prevents the page from being refreshed when the Enter key is pressed after typing in the username.  It then calls the function getUserName which stores the user input in the url and directs the user to the quiz page.
```Javascript
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        getUserName();
    }
})
```

* The tutorial being followed for the Quiz display function did not use template literals which made the code difficult to read.  When template literals were attempted, the radio buttons innerHTML tag name's value displayed `name="question[object Object]"` in the HTML when the js expression `${questions[i]}` was added to the 'question' value. This meant that the question number was not being defined properly and could cause errors later.

Solution: This was substituted with `[i]`, since in this case 'i' represents each question in the array.  

* For better user experience, it was decided to display the questions at random rather than having them always displayed in the order they are listed in the array.  After inserting the 'shuffle()' function, the answer choices did not always match the question displayed.

Solution: After various attempts at fixing this, it was decided to give each question and its relevant answer choices a unique ID by which they could be grouped together.  `questionID` and a specific number was added to each item in the array of questions.  Each answer choice was then labelled according to the question it was intended for. Adding a `questionID` was also very useful when checking the user's selected answer with the correct answer later on in the game. 


* Uncaught TypeError: Cannot read properties of undefined (reading 'classList') at showExhibit 
The element was referenced by its 'id' instead of 'class', therefore it could not add or remove another class attribute when needed to.

Solution: A class attribute was added to the element so that the classList property was able to add/remove classes to/from the list.  

* Uncaught TypeError: Cannot set properties of null (setting 'innerHTML') at displayQuiz

This error was showing as soon as the index.html page was loaded refering to this piece of JS code:
```javaScript
quizContainer.innerHTML = output.join('');
```
Once the username was validated and the start button directed the user to the quiz.html page, the error did not show up anymore. 

Solution: Since the quizContainer is only displayed on the quiz.html page, it had to be specified that it should only be called for when it needed to be displayed.  This was done by putting the code in an 'if clause' with a condition, like so:
```javaScript
 if (quizContainer != null) { quizContainer.innerHTML = output.join(''); }
``` 

* When trying to replace the 'gameArea' with the 'resultArea' using the `style.display` property, the `resultArea.style.display = 'block'` was clashing with the `display: flex` CSS styling for the 'resultArea' div.  

Solution: The 'block' value was replaced with 'flex' in the script.  While attempting different solutions it was discovered that passing in an empty string also worked in replacing the 'gameArea' with the 'resultArea' as long as 'gameArea' was given the value of `style.display = 'none'`.

## Manual Testing Bug Fixes

* When testing the quiz with keyboard navigation, the focus was lost after going through the radio buttons for the question on display.  It was tabbing through all the hidden radio buttons underneath before getting to the previous and next buttons.

Solution: The `<div>` with the 'active-exhibit' class had a `display:block`. Adding `display:none` to the `<div>` element with the 'exhibit' class made all the exhibits and their interactive radio buttons, which are visually hidden, also hidden for screen readers and took them out of the tabbing order.    

* The tabbing order was working well until the user pressed the 'next' button.  Once this was pressed and the quiz moved on to the next question, the focus was once again lost and tabbing didn't bring the user anywhere.  

Solution: The focus() method was added to the 'showNextExhibit' and 'showPreviousExhibit' functions in order to bring the focus back to the quiz question after these buttons are pressed. Giving the quiz `<div>` a tabindex of 0, made sure that the tab key brought the user back onto the next focusable element after pressing the next or previous buttons.

[Back to Top](#table-of-contents)

---

# Deployment

This online quiz was deployed to [GitHub Pages](https://pages.github.com/).  The steps taken in deploying this project are as follows:

1. Log on to GitHub and select 'quiz' from the list of repositories.
2. Click on 'Settings' on the menu just below the repository's name.
3. Navigate to the left side menu and click on 'Pages' in the 'Code and Automation' section.
4. In the Main area under 'Build and Deployment', click on the source dropdown menu and select the 'Deploy from Branch' selection.
5. In the 'Branch' section select the `main` branch and the `/(root)` folder.
6. Click 'Save'.
7. A message that the site is ready to be deployed appears just under the 'GitHub Pages' heading.  After refreshing the page, the link to the deployed site appears in a different color. 
8. Click on the link to go to the live deployed page. 

The live link can be found [here](https://monipar.github.io/quiz/)

[Back to Top](#table-of-contents)

---

# Citation of Sources

[How to save user input into a variable in HTML](https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-javascript)

[How to redirect to a new page using Javascript](https://www.designcise.com/web/tutorial/how-to-redirect-to-another-web-page-using-javascript)

[How to get string values from URL](https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript)

[How to shuffle an array of objects](https://www.webmound.com/shuffle-javascript-array/)

[How to improve web accessibility when hiding elements](https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements)

[HTML Currency Character Codes](https://html-css-js.com/html/character-codes/currency/)

[Giving focus to an element](https://www.w3schools.com/jsref/met_html_focus.asp)

[Styling radio inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/radio)


## Content

## Media

The Quizzified Logo was designed using [Brandcrowd.com](https://www.brandcrowd.com/)

[Back to Top](#table-of-contents)

---

# Acknowledgements

[Back to Top](#table-of-contents)

---

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

