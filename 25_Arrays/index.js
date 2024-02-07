// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits[3] = "coconut";
// fruits.push("coconut"); // add element
// fruits.pop(); //  sondaki elamanı kaldırır.
// fruits.unshift("mango"); // dizinin başına eleman eklemek
//fruits.shift(); // dizinin başından eleman kaldırmak

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length; // di<ideki eleman sayısı
// console.log(numOfFruits);

// let index = fruits.indexOf("apple"); // eleamnın kaçıncı indexde olduğu
// console.log(index);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = fruits.length - 1; i > 0; i--) {
//   console.log(fruits[i]);
// }
fruits.sort(); // alfabetik sıraya göre
fruits.sort().reverse(); // Tersten
for (fruits of fruits) {
  console.log(fruits);
}
// kısayol sıralamak için
