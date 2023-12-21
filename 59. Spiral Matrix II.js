/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let count = 1;
  let size = n * n;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (count <= size) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = count;
      count++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      arr[i][right] = count;
      count++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      arr[bottom][i] = count;
      count++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      arr[i][left] = count;
      count++;
    }
    left++;
  }
  return arr;
};

let n = 3;
console.log(generateMatrix(n));
