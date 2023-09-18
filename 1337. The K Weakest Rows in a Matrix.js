var kWeakestRows = function (mat, k) {
  let arr = [];
  //   for (let i = 0; i < mat.length; i++) {
  //     let len = 0;
  //     for (let j = 0; j < mat[i].length; j++) {
  //       if (mat[i][j] === 1) {
  //         len++;
  //       }
  //     }
  //     arr.push({ len, i });
  //   }

  arr = mat.map((e, i) => ({ len: e.reduce((a, b) => a + b, 0), i }));
  return arr
    .sort((a, b) => a.len - b.len)
    .slice(0, k)
    .map((e) => e.i);
};

let mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
let k = 3;

console.log("===>", kWeakestRows(mat, k));
