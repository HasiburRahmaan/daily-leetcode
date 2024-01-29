var maximumPopulation = function (logs) {
  const map = new Map();

  for (let [start, end] of logs) {
    for (let i = start; i < end; i++) {
      map.set(i, map.get(i) + 1 || 1);
    }
  }
  let max = [0, 0];
  for (let [key, value] of map) {
    if (value > max[1] || (value === max[1] && key < max[0])) {
      max = [key, value];
    }
  }

  return max[0];
};

let logs;
logs = [
  [1993, 1999],
  [2000, 2010],
];
// console.log(maximumPopulation(logs)); // 1993

logs = [
  [1960, 1971],
  [1950, 1961],
  [1970, 1981],
];
// console.log(maximumPopulation(logs)); // 1960

logs = [
  [2033, 2034],
  [2039, 2047],
  [1998, 2042],
  [2047, 2048],
  [2025, 2029],
  [2005, 2044],
  [1990, 1992],
  [1952, 1956],
  [1984, 2014],
];
console.log(maximumPopulation(logs)); // 2005

logs = [
  [2008, 2026],
  [2004, 2008],
  [2034, 2035],
  [1999, 2050],
  [2049, 2050],
  [2011, 2035],
  [1966, 2033],
  [2044, 2049],
];
console.log(maximumPopulation(logs)); // 2011
