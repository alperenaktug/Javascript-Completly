/*
setTimeOut = function in javascript that allows you to schedule
the execution of a function after an amount of time (milliseconds)
Times are approximate (varies based on the workload of the javascript runtime env.)

setTimeOut = function in javascript that allows you to schedule
the execution of a function after an amount of time (milliseconds)
Times are approximate (varies based on the workload of the javascript runtime env.)

setTime (callback , delay);
*/

// function sayHello() {
//   window.alert("Hello");
// }

// setTimeout(sayHello, 3000);

const timeoutId = setTimeout(function () {
  window.alert("Hello");
}, 3000);

clearTimeout(timeoutId); //set time out u iptal etmek içi
