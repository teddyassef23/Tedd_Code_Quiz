
// Define an array of quiz questions
const quizQuestions = [
  {
    question: "How many films did Sean Connery play James Bond in?",
    options: ["Tan", "Twowalve", "Seven", "Nighn"],
    correctAnswer: "Seven"
  },
  {
    question: "Which animal can be seen on the Porsche logo?",
    options: ["Hors", "God", "Sheep", "Camel"],
    correctAnswer: "Hors"
  },


  {
    question: "Who founded Amazon? ",
    options: ["Jeon Williams", "Jeff Bezos", "Stiv Harbin", "Elen Mask"],
    correctAnswer: "Jeff Bezos"
  },
  {
    question: "Which US agency has the motto “Fidelity, Bravery, Integrity”?",
    options: ["General Services Administration", "American Battle Monuments Commission", "United States Department of Defense", "FBI"],
    correctAnswer: "FBI"
  },
  {
    question: "Whose assassination led to the beginning of World War One? ",
    options: ["Franz Ferdinand", "Theodore Roosevelt", "Archduke Franz Ferdinand", "Douglas Haig"],
    correctAnswer: "Franz Ferdinand"
  },
  {
    question: "How many colors are there in a rainbow? ",
    options: ["Tan", "Twowalve", "Seven", "Nighn"],
    correctAnswer: "Seven"
  },
  {
    question: "4.	Name the longest river in the world?",
    options: ["Yellow River", "Nile", "Amazon", "Mississippi"],
    correctAnswer: "Nile"
  },


  {
    question: "Which country is responsible for giving us pizza and pasta??",
    options: ["Acquired Immune Deficiency Syndrome", "Acquired Immune Deficiency Syndrome", "American Immune Deficiency Syndrome", "Acquired Immune Deficet Syndrome"],
    correctAnswer: "Acquired Internal Deficiency Syndrome"
  },
  {
    question: "What does the acronym AIDS stand for?",
    options: ["American", "France", "Italy", "Spain"],
    correctAnswer: "Italy"
  },
  {
    question: "What is your body’s largest organ?",
    options: ["Intestile", "Lage", "Hand", "Skin"],
    correctAnswer: "Italy"
  }
];

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 40;
let timerInterval;
var timechecker = document.getElementById("timer-container");
var answercheck = document.getElementById("answer");


// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

// Function to display a question and its options
function displayQuestion() {


  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);



    // Add click event listener to check the answer
    button.addEventListener("click", function () {
      checkAnswer(option);
    });
  });

}


const answerConfirm = document.getElementById('answers');
function showTime() {

  answerConfirm.style.visibility = "visible";
}

function hideTime() {
  answerConfirm.style.visibility = "hidden";
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];



  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    answerConfirm.textContent = "Greate answer";
    answerConfirm.classList.remove("incorrect");
    answerConfirm.classList.add("correct");
    setTimeout("showTime()", 10);
    setTimeout("hideTime()", 300);
    score++;

  } else {
    answerConfirm.textContent = "Worng";
    answerConfirm.classList.remove("correct");
    answerConfirm.classList.add("incorrect");
    setTimeout("showTime()", 10);
    setTimeout("hideTime()", 300);
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    // answercheck.innerText = "";
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft <= 10) {
      timechecker.setAttribute('class', 'color');
    }

    // Update the timer text
    document.getElementById("timer").textContent = timeLeft;

    // End the quiz if time runs out
    //  if (timeLeft < 10){
    //     timeLeft.style.add("color");
    //  }


    if (timeLeft <= 0) {

      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `<h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p> `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);