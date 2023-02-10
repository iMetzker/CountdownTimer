const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const data = new Date();

function dayText(day) {
  const dayTextNow = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return dayTextNow[day];
}

function createTextDay(data) {
  const dayNow = data.getDay();
  const nameDay = dayText(dayNow);
  console.log(dayNow);
  return `${nameDay}`;
}

h1.innerHTML = createTextDay(data);
p.innerHTML = data.toLocaleString("pt-BR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
