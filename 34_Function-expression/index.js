// function declaration = define a reusable block of code
//                       that performs a specific task

// function hello() {
//   console.log("Hello");
// }

// function expression  = a way to define function as
//                       values or variables

// const hello = function () {
//   console.log("Hello");
// };
// hello();

// setTimeout(function () {
//   console.log("Hello");
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

console.log(cubes);
