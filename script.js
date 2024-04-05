const daysH2 = document.getElementById("DAYS");
const hoursH2 = document.getElementById("HOURS");
const minutesH2 = document.getElementById("MINUTES");
const secondsH2 = document.getElementById("SECONDS");
console.log(daysH2, hoursH2, minutesH2, secondsH2);

let countDownDate = new Date(`Apr 19 , 2024 23:59:59`).getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysH2.textContent = days;
  hoursH2.textContent = hours;
  minutesH2.textContent = minutes;
  secondsH2.textContent = seconds;

  if (distance < 0) {
    countDownDate += 14 * 60 * 60 * 24 * 1000;
  }
}, 1000);
