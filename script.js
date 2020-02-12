// Question List - Array form!

questions = [[
    "What is the only country that is also a continent?",
    "A. United States of America",
    "B. Vietnam",
    "C. Australia",
    "D. Venezuela",
    "C. Australia",
],
[
    "What was the first National Park in the United States?",
    "A. Grand Canyon",
    "B. Yosemite",
    "C. Appalachian",
    "D. Yellowstone",
    "D. Yellowstone",
],
[
    "Which city is the largest in the European Union?",
    "A. Amsterdam",
    "B. Barcelona",
    "C. Paris",
    "D. Berlin",
    "C. Paris",
],
[
    "What is the smallest country in the world?",
    "A. Vatican",
    "B. Monaco",
    "C. Bahamas",
    "D. Malta",
    "A. Vatican",
],
[
    "How many ACTIVE volcanoes are in Indonesia alone?",
    "A. 4",
    "B. 39",
    "C. 127",
    "D. 203",
    "C. 127",
],
[
    "After Brazil, which country is the next largest exporter of coffee?",
    "A. Mexico",
    "B. Vietnam",
    "C. Belize",
    "D. Turkey",
    "B. Vietnam",
],
[
    "Which South American country has the highest uninterrupted waterfall in the world?",
    "A. Brazil",
    "B. Argentina",
    "C. Columbia",
    "D. Venezuela",
    "D. Venezuela",
],
[
    "Which mountain range is the longest in the world?",
    "A. Andes",
    "B. Himalayan",
    "C. Rocky",
    "D. Great Dividing Range",
    "A. Andes",
],
[
    "Which city is the largest in Africa?",
    "A. Marrakesh, Morocco",
    "B. Cairo, Egypt",
    "C. Lagos, Nigeria",
    "D. Casablanca, Morocco",
    "D. Lagos, Nigeria",
],
[
    "About how many different languages are spoken in Africa?",
    "A. ~54",
    "B. ~2000",
    "C. ~1500",
    "D. ~300",
    "B. ~2000 different languages are spoken on the African continent",
]
];

var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");

var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;

function goToNextQuestion(whatTheUserClicked) {
    var correctText = questions[currentQuestionIndex].answer;

    if(whatTheUserClicked === correctText) {
        // console.log("correct!");
        score++;
    }
    else {
        // console.log("sorry that is not right.");
    }
    currentQuestionIndex++;
    getNewQuestion(currentQuestionIndex);

}

function answerClickSetUp() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    var d = document.getElementById("D");

    a.addEventListener("click", function () {goToNextQuestion(a.innerText); });
    b.addEventListener("click", function () {goToNextQuestion(b.innerText); })
    c.addEventListener("click", function () {goToNextQuestion(c.innerText); })
    d.addEventListener("click", function () {goToNextQuestion(d.innerHTML); })

}

answerClickSetUp() ;

startQuiz.addEventListener("click", function () {
    getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
    var question = questions[questionIndex];
    currentQuestion = question;
    var title = question.title;
    console.log(title);
}
