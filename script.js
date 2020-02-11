var questions = [

]

// Starting score of 0
var score = 0;

// Comparing Answers 
if ((answer === true && questions[i].a === "t") ||
    (anser === false && questions[i].a === "f")) {
    // Increase score
    score++;
    alert("Correct!");
}
else {
    alert("Wrong! Time has been reduced!");
}

// Showing total score at end
alert("You got " + score + "/" + questions.length);