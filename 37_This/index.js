// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//         person.name = this.name

const person3 = {
  name: "Tekashi",
  favFood: "hamburger",
  sayHello: function () {
    console.log(` Hi I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

const person4 = {
  name: "50Cent",
  favFood: "pizza",
  sayHello: function () {
    console.log(` Hi I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person3.sayHello();
person3.eat();

person4.sayHello();
person4.eat();
