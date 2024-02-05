// IF STATEMENTS =  if a acondition is true , execute some code
// if not , do somethinf else

// let age = 11;
// if (age >= 18) {
//   console.log("You are old enough to enter this site");
// } else {
//   console.log("You must be 18+ to enter this site ");
// }

// let time = 9;

// if (time < 12) {
//   console.log("Good morning");
// } else {
//   console.log("Good night");
// }

// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You sre not a student");
// }

// let age = 25;
// let haslicense = false;

// if (age >= 16) {
//   console.log("You are old enough to drive");

//   if (haslicense) {
//     console.log("You have your license");
//   } else {
//     console.log("You do not have license");
//   }
// } else {
//   console.log("You must be 16+ to have a license");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    resultElement.textContent = `You are TOO old yo enter this site`;
  } else if (age == 0) {
    resultElement.textContent = `You can't enter . You were just born`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to entert this site`;
  } else if (age < 0) {
    resultElement.textContent = `You age can't be below 0`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
};
