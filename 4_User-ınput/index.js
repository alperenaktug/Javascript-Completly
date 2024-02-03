// How to accept user input

// 1. EASY WAY =  window propmt
// 2. PROFESSIONAL WAY = HTML textbox

// let userName;

// userName = window.prompt("Waht is your username ?");

// console.log(userName);

let userName;

document.getElementById("mySubmit").onclick = function () {
  userName = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${userName}`;
  console.log(userName);
};
