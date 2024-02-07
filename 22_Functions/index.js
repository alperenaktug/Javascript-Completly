// FUNCTİON  = a section of resuable code .
//             Declare code once , use it whenever you want.
//             Call the function to execute thet code

// function happyBirthday(username, age) {
// Parametre ekliyoruz.
// Parametrelerin sırası önemli eşleştiğinden emin olun!!
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${username}!!`);
//   console.log(`You are ${age} years old !!`);
// }

// happyBirthday("Nicki Minaj", 25); // Argümanı veriyoruz.
// happyBirthday("Spiderman", 32);
// happyBirthday("Taylor Swift", 69);

// function add(x, y) {
//   let result = x + y;
//   return result;
// return x + y;
// }

// function substract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

// console.log(add(2, 3));
// console.log(substract(2, 3));
// console.log(multiply(2, 3));
// console.log(divide(2, 3));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }

// return number % 2 === 0 ? true : false ;
// }
// console.log(isEven(10));

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidEmail("Beymen.fake@gmail.com"));
console.log(isValidEmail("ElonMusk.gmail.com"));
