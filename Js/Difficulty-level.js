const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");
const mediumBtn = document.getElementById("medium");
const randomBtn = document.getElementById("random");

const difficulty = {
  level: "http://localhost:3000/results",
};
const randomArray = [
  "http://localhost:3000/results",
  "http://localhost:3000/results1",
  "http://localhost:3000/results2",
];

const randomFunction = (e) => {
  e.preventDefault();
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const choosenOne = randomArray[randomNumber(0, 2)];
  localStorage.removeItem("difficulty");
  localStorage.setItem("difficulty", JSON.stringify(choosenOne));
  difficulty.level = choosenOne;
  console.log(difficulty.level);
  window.location.assign("../game.html");
};

const easyLevel = (e) => {
  e.preventDefault();
  localStorage.removeItem("difficulty");
  difficulty.level = "http://localhost:3000/results1";
  localStorage.setItem("difficulty", JSON.stringify(difficulty.level));
  console.log("Difficulty:", difficulty.level);
  window.location.assign("../game.html");
};

const mediumLevel = (e) => {
  e.preventDefault();
  localStorage.removeItem("difficulty");
  difficulty.level = "http://localhost:3000/results";
  localStorage.setItem("difficulty", JSON.stringify(difficulty.level));
  console.log("Difficulty:", difficulty.level);
  window.location.assign("../game.html");
};

const hardLevel = (e) => {
  e.preventDefault();
  localStorage.removeItem("difficulty");
  difficulty.level = randomArray[2];
  localStorage.setItem("difficulty", JSON.stringify(difficulty.level));

  console.log("Difficulty:", difficulty.level);
  window.location.assign("../game.html");
};

easyBtn?.addEventListener("click", easyLevel);
mediumBtn?.addEventListener("click", mediumLevel);
hardBtn?.addEventListener("click", hardLevel);
randomBtn.addEventListener("click", randomFunction);
