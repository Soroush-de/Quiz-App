const loader = document.getElementById("loader");
const container = document.getElementById("container");
const finishBtn = document.getElementById("finish-button");
const nextBtn = document.getElementById("next-button");
const answerBtns = document.getElementById("answers");
const questionText = document.getElementById("question-text");
let questionNumber = document.getElementById("question-number");
let score = document.getElementById("Score");
let arrayOfButtons = [];

let URl = JSON.parse(localStorage.getItem("difficulty"));
console.log(URl);
let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;
const formatData = (questionData) => {
  // console.log(questionData);
  const result = questionData.map((item) => {
    const questionObject = { question: item?.question };
    const answers = [...item?.incorrect_answers];
    const currectAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(currectAnswerIndex, 0, item?.correct_answer);
    questionObject.answers = answers;
    questionObject.currectAnswerIndex = currectAnswerIndex;
    questionObject.type = item.type;
    questionObject.isClicked = "false";
    return questionObject;
  });
  return result;
};
const fetchData = async () => {
  const response = await fetch(URl);
  const json = await response.json();
  formattedData = formatData(json);
  console.log(formattedData);
  formatData(json);
  start();
};
const start = () => {
  showQuestion();
  loader.style.display = "none";
  container.style.display = "block";
};

const showQuestion = () => {
  questionNumber.textContent = questionIndex + 1;
  let { question, answers, currectAnswerIndex, type } =
    formattedData[questionIndex];

  questionText.innerHTML = question;
  if (type == "multiple") {
    answerBtns.innerHTML = `
      <button id="answer-text">${answers[0]}</button>
      <button id="answer-text2">${answers[1]}</button>
      <button id="answer-text3">${answers[2]}</button>
      <button id="answer-text4">${answers[3]}</button>
    `;
    const answerText = document.getElementById("answer-text");
    const answerText2 = document.getElementById("answer-text2");
    const answerText3 = document.getElementById("answer-text3");
    const answerText4 = document.getElementById("answer-text4");
    arrayOfButtons = [];
    arrayOfButtons.push(answerText);
    arrayOfButtons.push(answerText2);
    arrayOfButtons.push(answerText3);
    arrayOfButtons.push(answerText4);
    console.log(arrayOfButtons);
    answerText.addEventListener("click", (event) => checkAnswer(event, 0));
    answerText2.addEventListener("click", (event) => checkAnswer(event, 1));
    answerText3.addEventListener("click", (event) => checkAnswer(event, 2));
    answerText4.addEventListener("click", (event) => checkAnswer(event, 3));
  } else if (type == "boolean") {
    answerBtns.innerHTML = `
      <button id="answer-text">${answers[0]}</button>
      <button id="answer-text2">${answers[1]}</button>
      `;

    const answerText = document.getElementById("answer-text");
    const answerText2 = document.getElementById("answer-text2");
    arrayOfButtons = [];
    arrayOfButtons.push(answerText);
    arrayOfButtons.push(answerText2);
    console.log(arrayOfButtons);
    answerText.addEventListener("click", (event) => checkAnswer(event, 0));
    answerText2.addEventListener("click", (event) => checkAnswer(event, 1));
  }
  console.log({ type, currectAnswerIndex });
  if (type == "boolean" && currectAnswerIndex == 2) {
    console.log(type);
    currectAnswerIndex = 0;
  } else if (type == "boolean" && currectAnswerIndex == 3) {
    console.log(currectAnswerIndex);
    currectAnswerIndex = 1;
  }
};
const counter = () => {
  if (questionIndex < 9) {
    questionIndex = questionIndex + 1;
  } else if (questionIndex == 9) {
    nextBtn.style.display = "none";
    finishBtn.style.display = "block";
  }
  showQuestion();
};

const checkAnswer = (event, index) => {
  const currentQ = formattedData[questionIndex];
  arrayOfButtons.forEach((item) => (item.disabled = true));
  const currectAnswer = formattedData.map((item) => item.currectAnswerIndex);
  // console.log(index);
  let mmm = currentQ.currectAnswerIndex;

  if (index == currectAnswer[questionIndex]) {
    score.textContent = score.textContent;
    score.textContent = +score.textContent + 10;
    event.target.style.backgroundColor = "#5bd7bc";
    event.target.style.border = "2px solid #5bd7bc";
  } else {
    event.target.style.backgroundColor = " #fe6681";
    event.target.style.border = "2px solid  #53484a";
    let rightAnswer = arrayOfButtons[mmm];
    rightAnswer.style.backgroundColor = "#5bd7bc";
    rightAnswer.style.border = "2px solid #5bd7bc";
    console.log(rightAnswer);
  }
};
window.addEventListener("load", fetchData);
nextBtn.addEventListener("click", counter);
finishBtn.addEventListener("click", () => {
  localStorage.setItem("score", JSON.stringify(score.textContent));
  window.location.assign("../end.html");
});
