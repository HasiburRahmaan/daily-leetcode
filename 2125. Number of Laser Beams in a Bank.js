function numberOfBeams(bank) {
  let ans = 0,
    temp = 0;
  for (let b of bank) {
    let count = b.split("1").length - 1;
    if (count == 0) continue;

    ans += count * temp;
    temp = count;
  }
  return ans;
}

let bank = ["011001", "000000", "010100", "001000"];
console.log(numberOfBeams(bank));

bank = ["101", "001", "101", "000", "111", "101"];
console.log(numberOfBeams(bank));
