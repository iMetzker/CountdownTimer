const counter = document.querySelector(".timer-count");
const play = document.querySelector(".play");
const refresh = document.querySelector(".refresh");
const pause = document.querySelector(".pause");
let seconds = 0;
let timer;

function getTime(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function startCounter() {
  timer = setInterval(function () {
    seconds++;
    counter.innerHTML = getTime(seconds);
  }, 1000);
}

play.addEventListener("click", function (event) {
  startCounter();
  counter.classList.remove('pause');
});

pause.addEventListener("click", function (event) {
  clearInterval(timer);
  counter.classList.add('pause');
});

refresh.addEventListener("click", function (event) {
  counter.classList.remove('pause');
  clearInterval(timer);
  seconds = 0;
  counter.innerHTML = "00:00:00";
});
