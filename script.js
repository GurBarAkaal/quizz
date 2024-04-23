//  QUIZ ASSIGNMENT - HARSHWEEN MULTANI

// Event listener for the button
document.getElementById("submit").addEventListener("click", checkAnswers);

// Function to check answers and display result
function checkAnswers() {
  // Retrieve user's answers from input fields and convert to lowercase
  var answer1 = document.getElementById("answer1").value.toLowerCase();
  var answer2 = document.getElementById("answer2").value.toLowerCase();
  var answer3 = document.getElementById("answer3").value.toLowerCase();
  var answer4 = document.getElementById("answer4").value.toLowerCase();
  var answer5 = document.getElementById("answer5").value.toLowerCase();
  var answer6 = document.getElementById("answer6").value.toLowerCase();

  // Variable to store user's score
  var score = 0;

  // Check answer for question 1
  if (answer1 === "14") {
    // If correct, change input background color to green
    document.getElementById("answer1").style.backgroundColor = "lightgreen";
    document.getElementById("feedback1").innerHTML =
      "<span style='color: green;'>Correct</span>";
    // Increment score
    score++;
  } else {
    document.getElementById("answer1").style.backgroundColor = "tomato";
    document.getElementById("feedback1").innerHTML =
      "<span style='color: red;'>Incorrect</span>";
  }

  // Check answer for question 2
  if (
    answer2 === "23" ||
    answer2 === "twenty-three" ||
    answer2 === "twenty three"
  ) {
    document.getElementById("answer2").style.backgroundColor = "lightgreen";
    document.getElementById("feedback2").innerHTML =
      "<span style='color: green;'>Correct</span>";
    score++;
  } else {
    document.getElementById("answer2").style.backgroundColor = "tomato";
    document.getElementById("feedback2").innerHTML =
      "<span style='color: red;'>Incorrect</span>";
  }

  // Check answer for question 3
  if (answer3 === "50") {
    document.getElementById("answer3").style.backgroundColor = "lightgreen";
    document.getElementById("feedback3").innerHTML =
      "<span style='color: green;'>Correct</span>";
    score++;
  } else {
    document.getElementById("answer3").style.backgroundColor = "tomato";
    document.getElementById("feedback3").innerHTML =
      "<span style='color: red;'>Incorrect</span>";
  }

  // Check answer for question 4
  if (answer4 === "pekka" || answer4 === "p.e.k.k.a" || answer4 === "peka") {
    // Accepting alternative correct answer
    document.getElementById("answer4").style.backgroundColor = "lightgreen";
    document.getElementById("feedback4").innerHTML =
      "<span style='color: green;'>Correct</span>";
    score++;
  } else {
    document.getElementById("answer4").style.backgroundColor = "tomato";
    document.getElementById("feedback4").innerHTML =
      "<span style='color: red;'>Incorrect</span>";
  }

  // Check answer for question 5
  if (answer5 === "goblin barrel" || answer5 === "goblin") {
    document.getElementById("answer5").style.backgroundColor = "lightgreen";
    document.getElementById("feedback5").innerHTML =
      "<span style='color: green;'>Correct</span>";
    score++;
  } else {
    document.getElementById("answer5").style.backgroundColor = "tomato";
    document.getElementById("feedback5").innerHTML =
      "<span style='color: red;'>Incorrect</span>";
  }

  // Check answer for question 6
  if (answer6 === "no") {
    document.getElementById("answer6").style.backgroundColor = "lightgreen";
    document.getElementById("feedback6").innerHTML =
      "<span style='color: green;'>Correct</span>";
    score++;
  } else {
    document.getElementById("answer6").style.backgroundColor = "tomato";
    document.getElementById("feedback6").innerHTML =
      "<span style='color: red;'>Incorrect</span>";
  }

  // Calculate percentage score
  var percentage = Math.round((score / 6) * 100);
  // Display result
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "You got " + score + "/6 (" + percentage + "%)";

  // Provide appropriate response based on score
  var response;
  if (score === 6) {
    response = "Congratulations! You nailed it!";
  } else if (score >= 4) {
    response = "Well done! You did a great job!";
  } else {
    response = "Keep practicing! You'll improve!";
  }
  resultDiv.innerHTML += "<br>" + response;
}
