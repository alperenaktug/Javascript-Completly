// Variables = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. declaration  let x ;
// 2. assigment  x = 100 ;

// NUMBERS ;

let x = 123;
console.log(x);

let age = 25;
let price = 10.99;
let average = 3.4;

console.log(age);
console.log(price);
console.log(average);
console.log(`You are ${age} years old `);
console.log(`This price is ${price}`);
console.log(`Your average is : ${average}`);
// We can write the text with the variable using ${}

// STRİNGS ;

let firstName = "Alperen";
let favouriteFood = "Pizza";
let email = "aktugalperen9@gmail.com";

console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);

console.log(favouriteFood);
console.log(`You like ${favouriteFood}`);

console.log(`Your email is ${email}`);

// BOOLEANS ;

let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Jack is onlie : ${online}`);
console.log(`Is this car for sale : ${forSale}`);
console.log(`Enrolled : ${isStudent}`);

// Exercises ;

let FullName = "Jack Nicholson";
let Age = 25;
let Student = false;

document.getElementById("p1").textContent = "Name : " + FullName;
document.getElementById("p2").textContent = "Age :" + Age;
document.getElementById("p3").textContent = "Enrolled : " + Student;
