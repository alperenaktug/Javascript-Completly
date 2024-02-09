// arrow function = a concise way to write function expressions
//                  good for simple functons that you use  only
//                  .(parameters =>  some code)

// fonksiyon ifadelerini yazmanın kısa ve öz bir yolu

const hello1 = function () {
  console.log("Hello");
};
hello1();

const hello2 = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are old ${age} years old.`);
};
hello2("Jessica", 24);

setTimeout(() => console.log("Hello"), 4000);
