//  callback = a function that is passed as an argument
//             to another function.

//            used to handle asynchronous operations :
//            1.  Reading a file
//            2. Network request
//            3. Interacting with databases

//             "Hey ,  hen you're done, call this next."

// hello(goodbye);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }

// function wait() {
//   console.log("wait!!");
// }

// function leave() {
//   console.log("leave!!");
// }

// function goodbye() {
//   console.log("goodbye!!");
// }

sum(displayConsole, 2, 3);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

// Bu bir geri aramadır başka bir fonksiyona argüman olarak iletilen
// bir fonksiyondur. Değişken miktarda zaman alan asenkron
// işlemlerin gerçekleştirilmesinde görev alırlar .
// ağ isteklerinde ve veritabanı işlemlerindeki zmanalama
// ne zaman gerçekleşeceği gibi işlemlerde kullanılırlar.
