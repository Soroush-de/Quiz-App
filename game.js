import {difficultyLevel} from "./Difficulty-level";
const url = "http://localhost:3000/results";
const rounding = document.getElementById("loader");
const contianer = document.getElementById("container");
const questionBox = document.getElementById("question-box");
fetch(url)
  .then((item) => {
    item.json()
    console.log(item)
})
  .then((res) => {
    // console.log(res)
    rounding.style.display = "none";
    contianer.style.display = "block";
    return res;
  })
  .then((res) => {
    const multipleQuiz = res.filter((item) => item.type == "multiple");
    // console.log(multipleQuiz)
    const trueOrfalse = res.filter((item) => item.type == "boolean");
    // console.log(trueOrfalse)
    const easyQuestions = res.filter((item) => item.difficulty == "easy");
    const mediumQuestions = res.filter((item) => item.difficulty == "medium");
    const hardQuestions = res.filter((item) => item.difficulty == "hard");
    // console.log(easyQuestions, mediumQuestions, hardQuestions);
    const allQuestions = res.map((item) => item);
    const arrayOfQuestions = [
      multipleQuiz,
      trueOrfalse,
      easyQuestions,
      mediumQuestions,
      hardQuestions,
      allQuestions,
    ];
    return arrayOfQuestions;
  })

  .then((data) => {
    const [
      multipleQuiz,
      trueOrfalse,
      easyQuestions,
      mediumQuestions,
      hardQuestions,
      allQuestion,
    ] = data;
    console.log(difficultyLevel);
    // console.log(allQuestion);
    // console.log(multipleQuiz);
    if (difficultyLevel == "easy") {
    }
    if (difficultyLevel == "hard") {
    }
    if (difficultyLevel == "medium") {
    }
  });
