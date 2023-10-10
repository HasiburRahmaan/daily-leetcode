var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n == 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }

  return n % 2 == 0
    ? myPow(x * x, Math.floor(n / 2))
    : x * myPow(x * x, Math.floor(n / 2));
};

console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3));
console.log(myPow(0.00001, 2147483647));

/* -------------------------------------- */
/* Secon Approach (Binary Exponencial) */
/* -------------------------------------- */

// var myPow = function (x, n) {
//   if (n == 0) return 1;
//   if (n == 1) return x;
//   if (n < 0) {
//     x = 1 / x;
//     n = Math.abs(n);
//   }

//   let result = 1;
//   let currentVal = x;

//   while (n > 0) {
//     if (n % 2 == 1) {
//       result *= currentVal;
//     }
//     currentVal *= currentVal;
//     n = Math.floor(n / 2);
//   }

//   return result;
// };

/* -------------------------------------- */
/* First Approach  */
/* -------------------------------------- */

// var myPow = function (x, n) {
//   let p = Math.abs(n);
//   let res = x;
//   for (let i = 1; i < p; i++) {
//     res *= x;
//     console.log(i, res);
//   }

//   return n < 0 ? 1 / res : res;
// };
