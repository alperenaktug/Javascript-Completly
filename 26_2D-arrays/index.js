// 2D array = multi-dimennsional array that stores a matrix
//            of data in rows and columns
//            Useful for games , spreadsheets, or representing images

//            [X ,O ,X]
//            [X ,O ,X]
//            [X ,O ,X]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix[0][0] = "x";

for (let row of matrix) {
  //   const rowString = row.join("");
  console.log(row);
}
