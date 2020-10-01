// console.log("Working");
var welcomeContainer = document.getElementById("welcome-container");
var quizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var timerEl = document.getElementById("quiz-timer");
// Question 1 start
var questionIndex = 0;

var secondsLeft = 75;
var secDeduction = 15;
// Array of objects containing questions with answers.
var quizBank = [
  {
    question: "Commonly used data types do not include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question: "The condition in an if / else statement is enclosed in ______.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parantheses",
      "4. square brackets",
    ],
    answer: "2. curly brackets",
  },
  {
    question: "Arrays in Javascript can be used to store ___________.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the answers are true",
    ],
    answer: "4. all of the answers are true",
  },
  {
    question:
      "String calues must be enclosed within _______ when being assigned to variables",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parantheses"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/Bash",
      "3. for loops",
      "4. console log",
    ],
    answer: "4. console log",
  },
];
function renderQuizBank() {
  questionContainer.innerHTML = "";
  var question = document.createElement("h2");
  question. = quizBank[questionIndex].question;
  quiestion.textContent = quizBank.question;
  questionContainer.append(question);
  renderChoices();
}
function renderChoices() {
  answerContainer.innerHTML = "";
  for (var i = 0; i < quizBank[questionIndex].choices.length; i++) {
    var choiceButtons = document.createElement("button");
    choiceButtons.setAttribute(
      "style", "display: block; background-color: indigo; color: white; margin: 5px"
  choiceButtons.setAttribute("data-value", quizBank[questionIndex].choices[i]);
  choiceButtons.textContent = quizBank[questionIndex].choices[i]);
  answerContainer.append(choiceButtons);
      );

      answerContainer.addEventListener("click", function (event) {
        var element = event.target;
        //   console.log(element);
        var correctAnswer = quizBank[questionIndex].answer;
        if (element.matches("button") === true) {
          var answer = element.getAttribute("data-value");
          var createDiv = document.createElement("div");
          createDiv.innerHTML = "";
      
          if (answer === correctAnswer) {
            var createDiv = document.createElement("div");
            createDiv.textContent = "Correct!";
            questionIndex++;
            //   console.log(answer);
            renderQuizBank();
          } else {
            createDiv.textContent.innerHTML = "Incorrect.";
            // take 15 secs off of timer.
            secondsLeft = secondsLeft - secDeduction;
            questionIndex++;
            renderQuizBank();
          }
        }
      });

    quizButton.addEventListener("click", function () {
      console.log(quizButton, "You Clicked!");
      welcomeContainer.style.display = "none";
      questionContainer.setAttribute("style", "display: block");
      renderQuizBank();
    })

    choiceButtons.setAttribute(
      "data-value",
      quizBank[questionIndex].choices[i]
    );
    choiceButtons.textContent = quizBank[questionsIndex].choices[i];
    answerContainer.append(choiceButtons);
    console.log(choiceButtons);
  }
}

function correctAnswer() {
  correctAnswer.setAttribute(
    "data-value",
    quizBank[questionIndex].correctAnswer
  );
}


function setTime() {
  var timerrInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerrInterval);
      showGrade();
    }
  }, 1000);
}

quizButton.addEventListener("click", function () {
  console.log(quizButton, "You Clicked!");
  welcomeContainer.style.display = "none";
  questionContainer.setAttribute("style", "display: block");
  renderQuizBank();
  setTime();
});
