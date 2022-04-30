// declaration of main divs in the index.html
const challengeBox = document.querySelector(".challengeBox");

const questionBox = document.querySelector("#questionBox");
const quizHeader = document.querySelector("#quizHeader");
const responseAns = document.querySelector("#responseAns");

const resultScorePg = document.querySelector(".resultScorePg");

// declaration of responses to answer on each generating dynamic elements
const hrDiv = document.getElementById('div-hr');
const hrElem = document.createElement('HR');
let arrayOfBestScores = localStorage.getItem("saveUserScoreLocal");

// declaration of all buttons & inputs
const startBtn = document.querySelector("#startBtn");
const submitBtn = document.querySelector("#submitBtn");
const initials = document.querySelector("#initials");
const initialInput = document.querySelector("#initialInput");


// declaration for answer options
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

// end-page declarations
const scoreIs = document.querySelector("#scoreIs")



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
        init();

    }

});


questionBox.style.display = "none";
resultScorePg.style.display = "none";

timer.textContent = `Time: ${startScore}`;




// This is a function to start the quiz from main page
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


// this next function is to populate a question and answer options

function showQuestions() {
    let q = codeQuestions[questionIndex];

    quizHeader.innerHTML = q.quizHeader;
        option1.innerHTML = q.one;
        option1.setAttribute("data-answer", q.one);

        option2.innerHTML = q.two;
        option2.setAttribute("data-answer", q.two);

        option3.innerHTML = q.three;
        option3.setAttribute("data-answer", q.three);

        option4.innerHTML = q.four;
        option4.setAttribute("data-answer", q.four);

};

// this code-block is to check the clicked answer for correctness, display it in next screen with continously running timer
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
        responseAns.textContent = "Correct!";
    } else {
        responseAns.textContent = "Wrong!";
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


// next function is to show final score after complition of all questions or timer runs out

function showFinalScore() {
    challengeBox.style.display = "none";
    questionBox.style.display = "none";
    responseAns.style.display = "none";
    resultScorePg.style.display = "block";
    hrDiv.removeChild(hrElem);

    if (startScore === 0 || quizQuestions.length - 1) {
        finalScoreIs.textContent = `Your final score is ${secondsLeft}`;
        timerRunning = false;
    }
}

// this is for user to claim their score by entering initials and clicking submit button
submitBtn.textContent = "Submit";
initials.textContent = "Enter your Initials: ";

// function to save best scores in local storage
function saveBestScores() {

    window.location.href = './endpage.html';
    let getInitials = initialInput.value;
    secondsLeft = secondsLeft + 1;

    localStorage.setItem("initials", getInitials);
    localStorage.setItem("secondsLeft", secondsLeft);

    let userScore = {
        name: `${getInitials}`,
        score: `${secondsLeft}`
    };

    arrayOfBestScores.push(userScore);
    localStorage.setItem("saveUserScoreLocal", JSON.stringify(arrayOfBestScores));

}

function loadBestScores() {

    if (!arrayOfBestScores) {
        arrayOfBestScores = [];

    } else {
        arrayOfBestScores = JSON.parse(arrayOfBestScores);

    }
}

startBtn.addEventListener('click', startQuiz);

submitBtn.addEventListener('click', saveBestScores);

option1.addEventListener('click', (event) => {
    checkAnswer(event);
});

option2.addEventListener('click', (event) => {
    checkAnswer(event);
});

option3.addEventListener('click', (event) => {
    checkAnswer(event);
});

option4.addEventListener('click', (event) => {
    checkAnswer(event);
});


loadBestScores();


// This code block is on the endpage to go back to main page, display score, list of scores and option to delete scores
function init() {
    const goBackBtn = document.getElementById("goBack");

    const ol = document.getElementById("list");
    const scoreBox = document.querySelector('#score-box');

    const listOfScores = document.getElementById('listOfScores');
    const deleteScoresBtn = document.getElementById('deleteScores');


    
    // takes you back to quiz page
    goBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './index.html'
    });

    // to delete scores in the local storage
    deleteScoresBtn.addEventListener('click', () => {
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
        li.textContent = `${i + 1}. ${bestScoreLine.name} - ${bestScoreLine.score}`;

        ol.appendChild(li);

    }
}