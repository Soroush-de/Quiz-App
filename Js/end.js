const score2 = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreEle = document.getElementById("showScore");
scoreEle.innerText = score2;
const alertMessage = document.getElementById("alertMessage");
const button = document.querySelector("button");
const input = document.querySelector("input");

const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.appendChild(alert);
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const save = () => {
  if (!input.value || score2 == 0) {
    showAlert("invalid username or Score", "error");
  } else {
    const finalScore = {
      name: input.value.trim(),
      score: score2,
    };
    highScores.push(finalScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("score");
    window.location.assign("../index.html")
    input.value = "";
    console.log(highScores);
  }
};
button.addEventListener("click", save);
