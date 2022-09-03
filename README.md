
# Quizzified Online Quiz

Welcome to Quizzified! Quizzified is an online quiz game which tests the general knowledge of players.  The set of questions are randomly generated to give returning players a slightly different experience. Each question is presented with four choice answers with only one correct answer. 

![Quiz responsiveness on multiple screen sizes]()

[Visit the Quizzified online quiz here]()

___

# Table of Contents

1. [Overview](#overview)
2. [Features](#features)  


    * [Future Features](#future-features)
3. [User Experience (UX)](#user-experience-ux)
    * [Strategy / Site Goals](#strategysite-goals)
    * [Scope / User Stories](#scopeuser-stories)
    * [Structure / Design Choices](#structuredesign-choices)
    * [Skeleton / Wireframes](#skeletonwireframes)
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

## Future Features

[Back to Top](#table-of-contents)

---

# User Experience (UX)

## Strategy/Site Goals
The main goal of the online quiz game is to provide users with a challenging game that tests their knowledge about various subjects. 

## Score/User Stories

## Structure/Design Choices

## Skeleton/Wireframes

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

* When trying to check if the validateUserInput() function was working, the page refreshed every time the submit button was clicked.  No errors or warnings show up in the console and no expected alerts. [Stackoverflow](https://stackoverflow.com/questions/44681646/the-page-will-strangely-refresh-when-i-click-the-button) helped figure out why.

Solution: `<input type="submit">` submits the form data to the server and refreshes the page.  If `type="submit"` is removed, it will still behave in the same way since it is a form element.  In order to stop this refresh, it was changed to `<input type="button">`. 

* The function validateUserInput() was passing the errorMsg "Username must have 3 or more characters" when 3 characters were inputted in the text field.  This is due to the fact that user.length is index based and thus was counting from 0.  

Solution: The else if statement was changed to `(user.length <= 4)`


[Back to Top](#table-of-contents)

---

# Deployment


[Back to Top](#table-of-contents)

---

# Citation of Sources

## Content

## Media

The Quizzified Logo was designed using [Brandcrowd.com](https://www.brandcrowd.com/)

[Back to Top](#table-of-contents)

---

# Acknowledgements

[Back to Top](#table-of-contents)

---

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

