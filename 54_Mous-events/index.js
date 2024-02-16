// eventListener = Listen for specific events to create     interactive web pages
//  events: click, mouseover, mouseout
// .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", (event) => {
  //   console.log(event);
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "MyNigga!";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "pink";
  event.target.textContent = "Corona!";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "purple";
  event.target.textContent = "MyNigga!";
});

myButton.addEventListener("click", (event) => {
  //   console.log(event);
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "MyNigga!";
});

myButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "pink";
  event.target.textContent = "Corona!";
});

myButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "purple";
  event.target.textContent = "MyNigga!";
});
