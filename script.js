// Question List - Array form!
let questions = [
    {
        question: "What is the only country that is also a continent?",
        a1: "A. United States of America",
        a2: "B. Vietnam",
        a3: "C. Australia",
        a4: "D. Venezuela",
        answer: "C. Australia",
    },
    {
        question: "What was the first National Park in the United States?",
        a1: "A. Grand Canyon",
        a2: "B. Yosemite",
        a3: "C. Appalachian",
        a4: "D. Yellowstone",
        answer: "D. Yellowstone",
    },
    {
        question: "Which city is the largest in the European Union?",
        a1: "A. Amsterdam",
        a2: "B. Barcelona",
        a3: "C. Paris",
        a4: "D. Berlin",
        answer: "C. Paris",
    },
    {
        question: "What is the smallest country in the world?",
        a1: "A. Vatican",
        a2: "B. Monaco",
        a3: "C. Bahamas",
        a4: "D. Malta",
        answer: "A. Vatican",
    },
    {
        question: "How many ACTIVE volcanoes are in Indonesia alone?",
        a1: "A. 4",
        a2: "B. 39",
        a3: "C. 127",
        a4: "D. 203",
        answer: "C. 127",
    },
    {
        question: "After Brazil, which country is the next largest exporter of coffee?",
        a1: "A. Mexico",
        a2: "B. Vietnam",
        a3: "C. Belize",
        a4: "D. Turkey",
        answer: "B. Vietnam",
    },
    {
        question: "Which South American country has the highest uninterrupted waterfall in the world?",
        a1: "A. Brazil",
        a2: "B. Argentina",
        a3: "C. Columbia",
        a4: "D. Venezuela",
        answer: "D. Venezuela",
    },
    {
        question: "Which mountain range is the longest in the world?",
        a1: "A. Andes",
        a2: "B. Himalayan",
        a3: "C. Rocky",
        a4: "D. Great Dividing Range",
        answer: "A. Andes",
    },
    {
        question: "Which city is the largest in Africa?",
        a1: "A. Marrakesh, Morocco",
        a2: "B. Cairo, Egypt",
        a3: "C. Lagos, Nigeria",
        a4: "D. Casablanca, Morocco",
        answer: "D. Lagos, Nigeria",
    },
    {
        question: "About how many different languages are spoken in Africa?",
        a1: "A. ~54",
        a2: "B. ~2000",
        a3: "C. ~1500",
        a4: "D. ~300",
        answer: "B. ~2000 different languages are spoken on the African continent",
    }
];

let questionIndex = 0;
let time = questions.length * 15;
let timerId;

let timeEl = document.querySelector("#time");


// console.log(document.getElementById("questions"));

let masterQuiz = document.getElementById("questions");

// Create element, assign to a variable so it can be referenced later 
let startBtn = document.createElement("button"); // Create button

// Add content and behavior to element
startBtn.textContent = "Start Travel Quiz Now";
// Event listener that runs function when "event" happens, passed as first argument in a string naming the event
startBtn.addEventListener("click", function () {
    // console.log('button double clicked');
});

// Only declared functions are hoisted
function startBtnclickHandler(event) {
    console.log(event.target);
    startBtn.remove();
    displayNextQuestion();
    timerId = setInterval(tick, 1000);
    timeEl.textContent = time;
}

function tick() {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

startBtn.addEventListener("click", startBtnclickHandler)

// Attach floating element to an exisitng element in the document
masterQuiz.append(startBtn);


localStorage.setItem("recordedAnswers", JSON.stringify([]));

function getHighScore(event) {
    // data processing
    console.log(event.target);
    let highScore = event.target.textContent;

    let highScoreArray = JSON.parse(
        localStorage.getItem("highScore")
    );

    highScoreArray = highScoreArray.concat(highScore);
    localStorage.setItem(
        "highScore",
        JSON.stringify(highScoreArray)
    );

    displayNextQuestion();
}

function displayNextQuestion() {
    // Clear all nodes of the intended parent of new data divs.
    while (masterQuiz.firstChild) {
        masterQuiz.removeChild(masterQuiz.firstChild);
    }

    console.log("in displayQuestion()");
    let currentQuestion = questions[questionIndex];

    let question = document.createElement("div");
    question.textContent = currentQuestion.question;
    question.classList.add("title");

    let a1 = document.createElement("div");
    a1.textContent = currentQuestion.a1;
    a1.classList.add("clickable");

    let a2 = document.createElement("div");
    a2.textContent = currentQuestion.a2;
    a2.classList.add("clickable");

    let a3 = document.createElement("div");
    a3.textContent = currentQuestion.a3;
    a3.classList.add("clickable");

    let a4 = document.createElement("div");
    a4.textContent = currentQuestion.a4;
    a4.classList.add("clickable");

    masterQuiz.append(
        question,
        a1,
        a2,
        a3,
        a4
    );

    let clickableElements = document.querySelectorAll(".clickable");
    // console.log("clickableElements", clickableElements.length);
    for (let i = 0; i < clickableElements.length; i++) {
        clickableElements[i].addEventListener(
            "click",
            getHighScore
        );
    }
        questionIndex++;
}

