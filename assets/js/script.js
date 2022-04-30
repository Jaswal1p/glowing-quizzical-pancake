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

// declarations for timer
let secondsLeft = 75;
let startScore = 0;

let questionIndex = 0;
let timer = document.getElementById("timer");
let timerInterval;
let timerRunning = true;

// const responseAns = document.querySelector("#responseAns");



// following is the list of s and their multiple options of answers with one correct answer
let codeQuestions = [
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


questionBox.style.display = "none";
resultScorePg.style.display = "none";

Timer.textContent = `Time: ${startScore}`;


function startQuiz() {
    resultScorePg.style.display = "none";
    challengeBox.style.display = "none";
    questionBox.style.display = "block";

    showQuestions();

    timerInterval = setInterval(function () {
        timer.textContent = `Time: ${secondsLeft}`;

        if (timerRunning === false) {
            clearInterval(timerInterval);
        }

        if (secondsLeft === 0) {
            showFinalScore();
        } else {
            secondsLeft--;
        }
    }, 
    
    1000);

};

function showQuestions() {
    let q = codeQuestions[questionIndex];

    quizQuestionHeader.innerHTML = q.quizQuestionHeader;
        option1.innerHTML = q.one;
        option1.setAttribute("data-answer", q.one);

        option2.innerHTML = q.two;
        option2.setAttribute("data-answer", q.two);

        option3.innerHTML = q.three;
        option3.setAttribute("data-answer", q.three);

        option4.innerHTML = q.four;
        option4.setAttribute("data-answer", q.four);

};


function checkAnswer(event) {

    event.preventDefault();

    let answer = event.currentTarget.dataset.answer;

    let correctAnswer = null;

        hrElem.classList.add('hr-style');
        hrDiv.appendChild(hrElem);

    if (codeQuestions[questionIndex].correct === answer) {
        correctAnswer = answer;
    }

    if (answer === correctAnswer) {
        answerResponse.textContent = "Correct!";
    } else {
        answerResponse.textContent = "Wrong!";
        secondsLeft -= 10;

        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }

    if (codeQuestions.length === questionIndex + 1) {
        showFinalScore();
        return;
    }

    questionIndex++;
    showQuestions();
}







function init() {
       const goBackBtn = document.getElementById("goBack");

       const ol = document.getElementById("list");
       const scoreBox = document.querySelector('#score-box');

       const listOfScores = document.getElementById('#listOfScores');
       const deleteScores = document.getElementById('#deleteScores');


       
       // takes you back to quiz page
       goBackBtn.addEventListener('click', (e) => {
           e.preventDefault();
           window.location.href = './index.html'
       });

       // to delete scores in the local storage
       deleteScores.addEventListener('click', () => {
           localStorage.clear();

           while (ol.firstChild) {
               ol.removeChild(ol.firstChild);

           }

           if (!ol.hasChildNodes ()) {
               deleteScoresBtn.disabled = true;
               scoreBox.removeChild(listOfScores);

           }

       });

       // function to display details of submitted score
       arrayOfBestScores = JSON.parse(arrayOfBestScores);

       for (let i = 0; i < arrayOfBestScores.length; i++) {
           let bestScoreLine = arrayOfBestScores[i];
           let li = document.createElement('li');
           li.textContent = `${i + 1}. ${bestScoreLine} - ${bestScoreLine.score}`;

           ol.appendChild(li);

       }


};