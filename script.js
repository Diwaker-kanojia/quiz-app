const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What does HTML stand for ?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperText Markdown Language", correct: false },
      { text: "HyperLink Text Markup Language", correct: false },
      { text: "HyperContext Markup Language", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    answers: [
      { text: "To define the body of the document", correct: false },
      { text: "To define metadata about the document", correct: true },
      { text: "To define the footer of the document", correct: false },
      { text: "To define the header of the document", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to define an image?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<picture>", correct: false },
      { text: "<figure>", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <title> tag in HTML?",
    answers: [
      { text: "To define the title of the page", correct: true },
      { text: "To define the header of the page", correct: false },
      { text: "To define the footer of the page", correct: false },
      { text: "To define the body of the page", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style Sheets", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to set the color of text?",
    answers: [
      { text: "background-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "font-color", correct: false },
    ],
  },
  {
    question: "What is the purpose of the margin property in CSS?",
    answers: [
      { text: "To add space between elements", correct: false },
      { text: "To add space around an element's content", correct: true },
      { text: "To add a border around an element", correct: false },
      { text: "To add padding to an element", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to set the font size of text?",
    answers: [
      { text: "font-style", correct: false },
      { text: "font-weight", correct: false },
      { text: "font-size", correct: true },
      { text: "font-family", correct: false },
    ],
  },
  {
    question: "What is the purpose of the padding property in CSS?",
    answers: [
      { text: "To add space between elements", correct: false },
      { text: "To add space around an element's content", correct: false },
      {
        text: "To add space between an element's content and its border",
        correct: true,
      },
      { text: "To add a border around an element", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What does the null data type represent in JavaScript?",
    answers: [
      { text: "An empty string", correct: false },
      { text: "An undefined variable", correct: false },
      { text: "The absence of any object value", correct: true },
      { text: "A boolean false value", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `let` keyword?",
    answers: [
      { text: "To declare a constant variable", correct: false },
      { text: "To declare a block-scoped variable", correct: true },
      { text: "To declare a global variable", correct: false },
      { text: "To declare a function", correct: false },
    ],
  },
  {
    question: "Which event is triggered when a user clicks on an element?",
    answers: [
      { text: "onclick", correct: true },
      { text: "onmouseover", correct: false },
      { text: "onmouseout", correct: false },
      { text: "onchange", correct: false },
    ],
  },
  {
    question: "How do you declare an array in JavaScript?",
    answers: [
      { text: "Using the `let` keyword", correct: false },
      { text: "Using square brackets `[]`", correct: false },
      { text: "Using the `Array` constructor", correct: false },
      { text: "Both b and c", correct: true },
    ],
  },
  {
    question: "Which method is used to remove the last element from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `addEventListener()` method?",
    answers: [
      { text: "To attach an event handler to an element", correct: true },
      { text: "To remove an event handler from an element", correct: false },
      { text: "To trigger an event on an element", correct: false },
      { text: "To prevent an event from bubbling up", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `console.log()` function?",
    answers: [
      { text: "To output text to the screen", correct: true },
      { text: "To input text from the user", correct: false },
      { text: "To declare a variable", correct: false },
      { text: "To define a function", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "+", correct: false },
    ],
  },
  {
    question:
      "What is the data type of the variable `x` in `let x = 'hello';`?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: true },
      { text: "Boolean", correct: false },
      { text: "Object", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answerDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);
    answerContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answerDisabled) return;
  answerDisabled = true;
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answerContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;
  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You' re a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
