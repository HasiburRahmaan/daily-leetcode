var spiralOrder = function (matrix) {
  const result = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));

/*
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let numberOfCell = m * n;
  let currentCell = 0;

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  let res = [];

  while (currentCell < numberOfCell) {
    for (let i = left; i <= right && currentCell < numberOfCell; i++) {
      res.push(matrix[top][i]);
      currentCell++;
    }
    top++;

    for (let i = top; i <= bottom && currentCell < numberOfCell; i++) {
      res.push(matrix[i][right]);
      currentCell++;
    }
    right--;

    for (let i = right; i >= left && currentCell < numberOfCell; i--) {
      res.push(matrix[bottom][i]);
      currentCell++;
    }
    bottom--;

    for (let i = bottom; i >= top && currentCell < numberOfCell; i--) {
      res.push(matrix[i][left]);
      currentCell++;
    }
    left++;
  }
  return res;
};

*/
