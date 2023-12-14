var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rowOnes = new Array(m).fill(0);
  const colOnes = new Array(n).fill(0);

  // Count ones in rows and columns
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowOnes[i]++;
        colOnes[j]++;
      }
    }
  }

  // Update grid values
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = 2 * (rowOnes[i] + colOnes[j]) - (m + n);
    }
  }

  return grid;
};

let grid = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];
console.log(onesMinusZeros(grid));
