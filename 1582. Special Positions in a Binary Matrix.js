var numSpecial = function (mat) {
  let special = 0;

  let rowInd = new Array(mat[0].length).fill(0);
  let colInd = new Array(mat.length).fill(0);

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        rowInd[j] += 1;
        colInd[i] += 1;
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1 && rowInd[j] === 1 && colInd[i] === 1) {
        special++;
      }
    }
  }

  return special;
};

let mat = [
  [0, 0],
  [0, 0],
  [1, 0],
];
console.log(numSpecial(mat));

/* 
var numSpecial = function (mat) {
  let special = 0;

  let rowSum = [];
  let colSum = [];

  for (let i = 0; i < mat.length; i++) {
    rowSum[i] = rowSumCalculation(mat[i]);
  }

  for (let i = 0; i < mat[0].length; i++) {
    colSum[i] = colSumCalculation(mat, i);
  }

  for (let row = 0; row < rowSum.length; row++) {
    if (rowSum[row] == 1) {
      for (let col = 0; col < colSum.length; col++) {
        if (mat[row][col] == 1 && colSum[col] == 1) special++;
      }
    }
  }

  return special;

  function rowSumCalculation(row) {
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
      sum += row[i];
      if (sum > 1) break;
    }
    return sum;
  }

  function colSumCalculation(mat, colIndex) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
      sum += mat[i][colIndex];
      if (sum > 1) break;
    }
    return sum;
  }
};



*/
