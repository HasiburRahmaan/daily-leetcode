var findDiagonalOrder = function (nums) {
  let map = {};

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!map[i + j]) map[i + j] = [];
      map[i + j].push(nums[i][j]);
    }
  }

  const result = [];
  for (let key in map) {
    result.push(...map[key]);
  }

  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7],
    [8],
    [9, 10, 11],
    [12, 13, 14, 15, 16],
  ])
);

/* --------------------------------------------- */
/* ----------------time Limit------------------ */
/* --------------------------------------------- */

/*

var findDiagonalOrder = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!map[i + j]) map[i + j] = [];
      map[i + j].push(nums[i][j]);
    }
  }

  return Object.values(map).reduce(
    (result, currentValue) => [...result, ...currentValue.reverse()],
    []
  );
};

*/
