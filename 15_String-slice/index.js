// string slicing = creating a a substring
//                from a partion of another string

//      string.slice(start, end)

const fullName = "Tekashi Sixnine";

let firstName = fullName.slice(0, 7);
console.log(firstName);
//output : Tekashi

let lastName = fullName.slice(7, 16);
console.log(lastName);
//output : Sixnine

let lastChar = fullName.slice(-2);
console.log(lastChar);
// output : ne
