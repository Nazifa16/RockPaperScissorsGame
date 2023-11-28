const userChoiceImg = document.querySelector("#userChoiceImg");
const compChoiceImg = document.querySelector("#compChoiceImg");

const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");

const point1 = document.querySelector("#point1");
const point2 = document.querySelector("#point2");

const startBtn = document.querySelector("#startBtn");
const btnOut = document.querySelector("#btnOut");

const greetingPage = document.querySelector("#greetingPage");
const cards = document.querySelector("#cards");
const rule = document.querySelector("#rule");

let point = 0;

const select = (user, computer) => {
  userChoiceImg.src = `./img/${user}.jpg`;
  compChoiceImg.src = `./img/${computer}.jpg`;

  if (
    (user === "p" && computer === "r") ||
    (user === "r" && computer === "s") ||
    (user === "s" && computer === "p")
  ) {
    point += 1;
    point1.innerHTML = point;
    result1.innerHTML = "WIN";
    result1.style.color = "green";
    result2.innerHTML = "LOSE";
    result2.style.color = "red";
  } else if (user === computer) {
    result1.innerHTML = "DRAW";
    result1.style.color = "gray";
    result2.innerHTML = "DRAW";
    result2.style.color = "gray";
  } else {
    point += 1;
    point2.innerHTML = point;
    result1.innerHTML = "LOSE";
    result1.style.color = "red";
    result2.innerHTML = "WIN";
    result2.style.color = "green";
  }

  // Changing the color of points based on their values
  if (point1.innerHTML > point2.innerHTML) {
    point1.style.color = "green";
    point2.style.color = "red";
  } else if (point2.innerHTML > point1.innerHTML) {
    point1.style.color = "red";
    point2.style.color = "green";
  } else {
    point1.style.color = "gray";
    point2.style.color = "gray";
  }
};
// start button
startBtn.addEventListener("click", function () {
  let name = prompt("please enter your name");
  greetingPage.classList.add("d-none");
  cards.classList.remove("d-none");
  alert(
    `${name} press one of the keyboards with the letters r,p,s to start the game`
  );
  rule.innerHTML = `${name} press  one  of  the  keyboards  with the  letters  r,p,s  to  start  the  game`;
  const options = ["r", "p", "s"];
  const random_choice = () => {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  };

  window.addEventListener("keypress", function (e) {
    const userChoice = e.key;
    if (options.includes(userChoice)) {
      const computerChoice = random_choice();
      select(userChoice, computerChoice);
    } else {
      alert("Please choose a valid option: 'r', 'p', or 's'");
    }
  });
});
// logout button
btnOut.addEventListener("click", function () {
  window.close();
});
