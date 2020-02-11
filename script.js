$(document).ready(function() {
    // Question List - Array form!


var questions = [[
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
],
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




})