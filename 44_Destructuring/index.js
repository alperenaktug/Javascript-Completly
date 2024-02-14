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

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
