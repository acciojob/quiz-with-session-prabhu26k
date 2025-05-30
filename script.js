//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
// JS code


// Do not change code below this line
// This code will just display the questions to the screen
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

// Render questions dynamically
const questionsElement = document.getElementById("questions");

function renderQuestions() {
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

      const choiceLabel = document.createElement("label");
      choiceLabel.appendChild(choiceElement);
      choiceLabel.appendChild(document.createTextNode(choice));

      questionElement.appendChild(choiceLabel);
    }

    questionsElement.appendChild(questionElement);
  }
}

// Calculate and display score
document.getElementById("submit").addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
    if (selectedOption && selectedOption.value === questions[i].answer) {
      score++;
    }
  }

  document.getElementById("score").innerText = `Your Score: ${score}`;
});

// Initial rendering
renderQuestions();