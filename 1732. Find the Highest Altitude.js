var largestAltitude = function (gain) {
  let max = 0;
  let sum = 0;

  gain.forEach((element) => {
    sum += element;
    max = Math.max(max, sum);
  });
  return max;
};

let gain;

gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain)); // 1

gain = [-4, -3, -2, -1, 4, 3, 2];
console.log(largestAltitude(gain)); // 0
