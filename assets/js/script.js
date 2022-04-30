// declaration of main divs in the index.html
const challengeBox = document.querySelector(".challengeBox");

const Box = document.querySelector(".Box");

const responseAns = document.querySelector(".responseAns");

const resultScorePg = document.querySelector(".resultScorePg");

const hrDiv = document.getElementById('div-hr');

// declaration of internal secondary divs
const quizHeader = document.querySelector(".quizHeader");

const option1 = document.getElementById("one");
const option2 = document.getElementById("two");
const option3 = document.getElementById("three");
const option4 = document.getElementById("four");


// following is the list of s and their multiple options of answers with one correct answer
let quizQuestions = [
    {
        "quizHeader": "Commonly used Data Types do NOT Include:",
        "one": "1. strings",
        "two": "2. booleans",
        "three": "3. alerts",
        "four": "4. numbers",
        "correct": "3. alerts",
    }, {
        "quizHeader": "The condition in an if / else statement is enclosed within ________.",
        "one": "1. quotes",
        "two": "2. curly brackets",
        "three": "3. parenthesis",
        "four": "4. square brackets",
        "correct": "3. parenthesis",
    }, {
        "quizHeader": "Arrays in JavaScript can be used to store ________.",
        "one": "1. numbers and strings",
        "two": "2. other arrays",
        "three": "3. booleans",
        "four": "4. all of the above",
        "correct": "4. all of the above",
    }, {
        "quizHeader": "String values must be enclosed within ________ when being assigned to variables",
        "one": "1. commas",
        "two": "2. curly brackets",
        "three": "3. quotes",
        "four": "4. parenthesis",
        "correct": "3. quotes",
    }, {
        "quizHeader": "A very useful tool used for developing and debugging for printing content to the debugger is:",
        "one": "1. JavaScript",
        "two": "2. terminal / bash",
        "three": "3. for loops",
        "four": "4. console.log",
        "correct": "4. console.log",
    },
];

// add an event listener 

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
        Infinity();

    }

});

function init() {
       const goBackBtn = document.getElementById("goBack");




       // takes you back to quiz page
       goBackBtn.addEventListener('click', (e) => {
           e.preventDefault();
           window.location.href = './index.html'
       })


       
}