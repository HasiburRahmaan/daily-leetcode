var flat = function (arr, n, result = []) {
  for (let array of arr) {
    if (Array.isArray(array) && n > 0) {
      flat(array, n - 1, result);
    } else {
      result.push(array);
    }
  }

  return result;
};

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;

console.log(flat(arr, n)); // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 2;
console.log(flat(arr, n)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
n = 2;
console.log(flat(arr, n)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/*

var flat = function (arr, n) {
  if (n < 1) return arr;
  let result = [];

  for (let array of arr) {
    if (Array.isArray(array)) {
      result = result.concat(flat(array, n - 1));
    } else {
      result.push(array);
    }
  }

  return result;
};

*/
