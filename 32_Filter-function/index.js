// .filter ()  = create a neew array by filtering
//               out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 === 1;
// }

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChild);

console.log(childs);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}
