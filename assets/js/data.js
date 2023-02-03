const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const data = new Date();

function dayText(day) {
  const dayText = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];
  return dayText[day];
}

function createTextDay(data) {
  const dayNow = data.getDate();
  const nameDay = dayText(dayNow);
  return `${nameDay}`;
}

h1.innerHTML = createTextDay(data);
p.innerHTML = data.toLocaleString("pt-BR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
