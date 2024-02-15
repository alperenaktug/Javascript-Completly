// element selectors = Methods used to target and manipulate HTML elements
//They allow you to select one or multiple HTML elements
//from the DOM (Document Object Model)

// 1. document.getElementById()      // ELEMENT OR NULL
// 2. document.getElementsClassName()// HTML COLLECTION
// 3. document.getElementsByTagName()// HTML COLLECTION
// 4. document.querySelector()       // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()    // NODELIST

const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "brown";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

fruits[0].style.backgroundColor = "purple";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "pink";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "green";
// }

const h4Elements = document.getElementsByTagName("h4");

console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "grey";
// h4Elements[1].style.backgroundColor = "red";

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }

const element = document.querySelector("ul");

element.style.background = "brown";
console.log(element);

// const foods = document.querySelectorAll(".fruits");
