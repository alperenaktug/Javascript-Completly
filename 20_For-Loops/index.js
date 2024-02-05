// For Loops : repeat some code a LIMITED amount of times

// for (let i = 1; i <= 10; i++) {
// console.log("Hello world");
//   console.log(i);
// }

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// console.log("HAPPY NEW YEAR");

for (let i = 20; i >= 0; i--) {
  if (i == 13) {
    continue; // sayım işleminde oraya gelince yineleme yapmıyor ysani saymıyor
    // break; kullanrsak direk olarak döngüden çıkar . yani bitirir.
  } else {
    console.log(i);
  }
}
