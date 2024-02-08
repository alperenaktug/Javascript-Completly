//  foreach() = method used to iterate over the elements
//             of an array and appşy a aspecified function
//             to each elemnt

//             array.foreach(callback)
//             element , index , array are provide

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }
// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }
// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
// function display(element) {
//   console.log(element);
// }

let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];
fruits.forEach(lowerCase);
// fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}
function display(element) {
  console.log(element);
}
