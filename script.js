const nums = document.querySelector(".nums");
const advice = document.querySelector(".advice-content");
const load = document.querySelector(".button");

load.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      advice.innerText = data.slip.advice;
      nums.innerText = data.slip.id;
    });
});
