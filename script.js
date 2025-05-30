//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
// JS code
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

const questionsElement = document.getElementById("questions");
const submitBtn = document.getElementById("submit");
let userAnswers = {};

function renderQuestions() {
  questionsElement.innerHTML = ""; // Clear before rendering
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);

      // Capture selected answer
      choiceElement.addEventListener("change", () => {
        userAnswers[i] = choice;
      });

      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(document.createElement("br"));
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }

    questionsElement.appendChild(questionElement);
  }
}

submitBtn.addEventListener("click", function () {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  alert(`You scored ${score} out of ${questions.length}`);
  localStorage.setItem("quizScore", score);
});

renderQuestions();