// DOM Navigation = The process of navigating through the structure
//of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------firstElementChild--------------------

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "pink";
// });

// ----------------lastChild -----------------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "orange";

// const akElements = document.querySelectorAll("ul");

// akElements.forEach((akElement) => {
//   const lastChild = akElement.lastElementChild;
//   lastChild.style.backgroundColor = "purple";
// });

// ------------- .parentElement ----------------------

// const element = document.getElementById("carrots");
// const parent = element.parentElement;
// parent.style.backgroundColor = "brown";

// ------------ .children ---------------------

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "red";
});

//  child[1].style.backgroundColor = "red";
