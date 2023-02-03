const counter = document.querySelector(".timer-count");
const play = document.querySelector(".play");
const refresh = document.querySelector(".refresh");
const pause = document.querySelector(".pause");
const addMinute = document.querySelector('.addMinute');
const reduceMinute = document.querySelector('.reduceMinute');
let seconds = 1500;
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
    seconds--;
    counter.innerHTML = getTime(seconds);

    if (seconds <=0) {
      clearInterval(timer);
      counter.innerHTML = "00:00:00";
      document.getElementById('timeOut').play();
    }
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

addMinute.addEventListener('click', function (event) {
  counter.innerHTML = getTime(seconds += 300);
})

reduceMinute.addEventListener('click', function (event) {
  counter.innerHTML = getTime (seconds -= 300);
})