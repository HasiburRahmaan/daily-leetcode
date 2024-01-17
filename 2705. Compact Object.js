var compactObject = function (obj) {
  if (obj === null) return;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);

  if (typeof obj !== "object") return obj;

  let res = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      res[key] = compactObject(obj[key]);
    }
  });

  return res;

  //   console.log(keys);
  return "";
};

let obj;

obj = [null, 0, false, 1]; //[1]
// obj.filter(Boolean).map(show);
console.log(compactObject(obj));

obj = { a: null, b: [false, 1] }; //{"b": [1]}
console.log(compactObject(obj));

obj = [null, 0, 5, [0], [false, 16]]; //[5, [], [16]]
console.log(compactObject(obj));

obj = [null, 0, false, 1, { a: 1, b: null }]; //[1, {"a": 1}]
console.log(compactObject(obj));

obj = { a: 1, b: 1, c: null, d: "false", e: 0 }; // {"a": 1, "b": 1, "d": "false"}
console.log(compactObject(obj));

function show(x) {
  console.log(x);
}
