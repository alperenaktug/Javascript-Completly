//  Error = An object that is created to represent a problem that occurs , Occurs often with user input or establishing a connection
// Hata = Ortaya çıkan, genellikle kullanıcı girişi veya bağlantı kurulmasıyla ortaya çıkan bir sorunu temsil etmek üzere oluşturulan nesne

// Network error
// Security error
// Promise rejection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//   ex. close files, close connections, release resources

// try {
//   console.log(x);
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("This always execute");
// }

// console.log("You have reached the end");

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("You can't divide by zero!");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
} finally {
  console.log("This always executes");
}

console.log("You have reached the end!");
