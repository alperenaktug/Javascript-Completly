// ternary operator = a shortcut to if {} and else {} statements
//                    helps to assign a avariable based on a condition
//                    consition ? codeIfTrue : codeIfFalse;

// let age = 21;

// let message = age >= 18 ? "You are an adult" : "You are a minor";

// console.log(message);

// let time = 9;

// let greeting = time < 12 ? "Good morning " : "Good afternoon";

// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are student" : "you are not student";

// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(
  `Yout total is ${purchaseAmount - purchaseAmount * (discount / 100)}`
);
