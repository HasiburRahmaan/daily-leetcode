var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  if (n === 1) return Math.min(...matrix[0]);

  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[n - 1] = matrix[n - 1];
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      let elements = [];
      if (dp[row + 1][col] != undefined) elements.push(dp[row + 1][col]);
      if (dp[row + 1][col - 1] != undefined)
        elements.push(dp[row + 1][col - 1]);
      if (dp[row + 1][col + 1] != undefined)
        elements.push(dp[row + 1][col + 1]);
      dp[row][col] = Math.min(...elements) + matrix[row][col];
    }
  }
  //   return dp;
  return Math.min(...dp[0]);
};

let matrix;

matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
// console.log(minFallingPathSum(matrix)); // 13

matrix = [
  [-19, 57],
  [-40, -5],
];
// console.log(minFallingPathSum(matrix)); // -59

matrix = [[-48]];
// console.log(minFallingPathSum(matrix)); // -48

matrix = [
  [100, -42, -46, -41], //[124, -32, -36, -31]
  [31, 97, 10, -10], // [24, 90, 10, 21]
  [-58, -51, 82, 89], //[-7, 0, 31, 38]
  [51, 81, 69, -51],
];
// console.log(minFallingPathSum(matrix)); // -36
