const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");
const mediumBtn = document.getElementById("medium");
const randomBtn = document.getElementById("random");

const difficulty = {
  level: "medium",
};
const randomArray = ["easy", "medium", "hard"];

const randomFunction = (e) => {
  e.preventDefault();
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const choosenOne = randomArray[randomNumber(0, 2)];
  localStorage.clear();
  localStorage.setItem("difficulty", choosenOne);
  difficulty.level = choosenOne;
  console.log(difficulty.level);
};

const easyLevel = (e) => {
  e.preventDefault();
  difficulty.level = "easy";
  localStorage.clear();
  localStorage.setItem("difficulty", difficulty.level);
  console.log("Difficulty:", difficulty.level);
};

const mediumLevel = (e) => {
  e.preventDefault();
  difficulty.level = "medium";
  localStorage.clear();
  localStorage.setItem("difficulty", difficulty.level);
  console.log("Difficulty:", difficulty.level);
};

const hardLevel = (e) => {
  e.preventDefault();
  difficulty.level = "hard";
  localStorage.clear();
  localStorage.setItem("difficulty", difficulty.level);

  console.log("Difficulty:", difficulty.level);
};

easyBtn?.addEventListener("click", easyLevel);
mediumBtn?.addEventListener("click", mediumLevel);
hardBtn?.addEventListener("click", hardLevel);
randomBtn.addEventListener("click", randomFunction);
export default difficulty;
