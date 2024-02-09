// object = A collection of related properies and/or methods
//         Can represent real world objects (people,products,places)
//         object = {key:value,
//                  function()}

//nesne = İlgili özelliklerin ve/veya yöntemlerin bir koleksiyonu
// Gerçek dünya nesnelerini (insanlar, ürünler, yerler) temsil edebilir
// Nesneler aynı isme sahip olamaz.
const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! Iam spongebob!!");
  },
};

const person2 = {
  firstName: "James",
  lastName: "Harden",
  age: 23,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi! Iam James Harden!!");
  },
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

console.log(person2);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.sayHello();
person2.sayHello();
