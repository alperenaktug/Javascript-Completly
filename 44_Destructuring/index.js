/*
Destructuring = extract values from arrays and objects, 
then assign them to variables in a convenient way
[] = to perform array destructuring
{} = to perform object destructuring

Destructuring = dizilerden ve nesnelerden değerleri ayıkla,
ardından bunları değişkenlere uygun bir şekilde atayın
[] = dizi yıkımını gerçekleştirmek için
{} = nesne imhası yapmak için

*/

//   example 1 ;
// Değişkenin değerini değiştirirken yıkımı kullandık

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// example 2
// Bir dizideki iki değeri değiştirebiliriz

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// example 3
// Değişkenlere dizideki elemanları atarız

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

//example 4
//obje değerlerini değiştirebiliriz

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry cook",
};
const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//example 5
//fonksiyon parametrelerini yıkabiliriiz

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
