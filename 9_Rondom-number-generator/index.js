// Rondom Number Generator

// let randomNum = Math.floor(Math.random() * 6) + 1;

// console.log(randomNum);
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const myBtn = document.getElementById("myBtn");
const myLbl = document.getElementById("myLbl");
const min = 1;
const max = 6;
let randomNum;

myBtn.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLbl.textContent = randomNum;
};
