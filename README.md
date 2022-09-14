
# Quizzified Online Quiz

Welcome to Quizzified! Quizzified is an online quiz game which tests the general knowledge of players.  The set of questions are randomly generated to give returning players a slightly different experience. Each question is presented with four choice answers with only one correct answer. 

![Quiz responsiveness on multiple screen sizes]()

[Visit the Quizzified online quiz here]()

___

# Table of Contents

1. [Overview](#overview)
2. [Features](#features)  
    * [Index / Home Page](#index--home-page)
    * [Quiz Page](#quiz-page)
    * [Score Display](#score-display)
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

It is a mobile-first build and is responsive on tablet, desktop and screens up to 2000px wide. It is also compatible with all popular browsers. 

The online quiz is intended to target players young and old, who want to challenge themselves and perhaps learn a few more historical, scientific, mathematical and popular culture facts. 

Interactivity, score count, high score record, keyboard accessible.



---

# Features

## Index / Home Page

## Quiz Page

## Score Display

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

Warning: The type attribute is unnecessary for JavaScript resources.

From line 46, column 5; to line 46, column 61
```HTML
<script src="assets/js/script.js" type="text/javascript"></script>
```
Solution: The type attribute was removed.

* quiz.html


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

* Uncaught TypeError: Cannot read properties of undefined (reading 'classList') at showExhibit 
The element was referenced by its ID instead of class, therefore it could not add or remove another CSS class when needed to.

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

## Manual Testing Bug Fixes

* When testing the quiz with keyboard navigation, the focus was lost after going through the radio buttons for the question on display.  It was tabbing through all the hidden radio buttons underneath before getting to the previous and next buttons.

Solution: The `<div>` with the 'active-exhibit' class had a `display:block`. Adding `display:none` to the `<div>` element with the 'exhibit' class made all the exhibits and their interactive radio buttons, which are visually hidden, also hidden for screen readers and took them out of the tabbing order.    

* The tabbing order was working well until the user pressed the 'next' button.  Once this was pressed and the quiz moved on to the next question, the focus was once again lost and tabbing didn't bring the user anywhere.  

Solution: The focus() method was added to the 'showNextExhibit' and 'showPreviousExhibit' functions in order to bring the focus back to the quiz question after these buttons are pressed. Giving the quiz `<div>` a tabindex of 0, made sure that the tab key brought the user back onto the next focusable element after pressing the next or previous buttons.

[Back to Top](#table-of-contents)

---

# Deployment


[Back to Top](#table-of-contents)

---

# Citation of Sources

[How to redirect to a new page using Javascript](https://www.designcise.com/web/tutorial/how-to-redirect-to-another-web-page-using-javascript)

[How to get string values from URL](https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript)

[How to shuffle an array of objects](https://www.webmound.com/shuffle-javascript-array/)

[How to improve web accessibility when hiding elements](https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements)

[Giving focus to an element](https://www.w3schools.com/jsref/met_html_focus.asp)

## Content

## Media

The Quizzified Logo was designed using [Brandcrowd.com](https://www.brandcrowd.com/)

[Back to Top](#table-of-contents)

---

# Acknowledgements

[Back to Top](#table-of-contents)

---

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

