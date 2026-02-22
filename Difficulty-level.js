// const easyBtn = document.getElementById("easy");
// const hardBtn = document.getElementById("hard");
// const mediumBtn = document.getElementById("medium");

// let difficultyLevel = "medium";

// const easyLevel = () => {
//   difficultyLevel = "easy";
//   console.log(difficultyLevel);
// };
// const mediumLevel = () => {
//   difficultyLevel = "medium";
//   console.log(difficultyLevel);
// };

// const hardLevel = () => {
//   difficultyLevel = "hard";
//   console.log(difficultyLevel);
// };

// easyBtn?.addEventListener("click", easyLevel);
// mediumBtn?.addEventListener("click", mediumLevel);
// hardBtn?.addEventListener("click", hardLevel);

// export default difficultyLevel; 
const difficulty = {
  level: "medium",
};

const easyLevel = () => {
  difficulty.level = "easy";
  console.log("Difficulty:", difficulty.level);
};

const mediumLevel = () => {
  difficulty.level = "medium";
  console.log("Difficulty:", difficulty.level);
};

const hardLevel = () => {
  difficulty.level = "hard";
  console.log("Difficulty:", difficulty.level);
};

const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");

easyBtn?.addEventListener("click", easyLevel);
mediumBtn?.addEventListener("click", mediumLevel);
hardBtn?.addEventListener("click", hardLevel);

export { difficulty };