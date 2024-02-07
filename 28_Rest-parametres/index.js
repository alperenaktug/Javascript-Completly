// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an Array

//                   spread = expands ana array ainto seperate elements
//                   rest = bundless seperate elements into an array

// Dinlemenem parametreleri
// spread elemti bir diziye ayrı elemanları genişletirir
// rest ise ayrı elemanları düzel bir şekilde birleştirir.

function openFridge(...foods) {
  console.log(foods);
}
function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);
