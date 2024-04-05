const daysH2 = document.getElementById("DAYS");
const hoursH2 = document.getElementById("HOURS");
const minutesH2 = document.getElementById("MINUTES");
const secondsH2 = document.getElementById("SECONDS");
console.log(daysH2, hoursH2, minutesH2, secondsH2);

// const hours = days / 24;
// const minutes = hours / 60;
// const seconds = minutes / 60;
// const updateSeconds = function () {
//   let seconds = 59;
//   setInterval(() => {
//     secondsH2.textContent = seconds;
//     if (seconds === 0) {
//       seconds = 59;
//     } else {
//       seconds--;
//       return seconds;
//     }
//   }, 1000);
// };

// // const handleSecondsUpdate = function (seconds) {
// //   return seconds; // Log the updated value of seconds
// // };

// console.log(updateSeconds());

const updateSeconds = function (handleSeconds) {
  let seconds = 59;
  setInterval(() => {
    secondsH2.textContent = seconds;
    if (seconds === 0) {
      seconds = 59;
    } else {
      seconds--;
      handleSeconds(seconds);
    }
  }, 1000);
};

const handleSeconds = function (seconds) {
  console.log(seconds);
  return seconds;
};

updateSeconds(handleSeconds);

// const updateMinutes = function () {
//   let main_seconds = updateSeconds();
//   console.log(main_seconds);
//   let minutes = 59;
//   setInterval(() => {
//     minutesH2.textContent = minutes;
//     // if (main_seconds.seconds) {
//     // }
//   }, 1000);
// };
// updateMinutes();
