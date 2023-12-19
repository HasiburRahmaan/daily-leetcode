var convertTime = function (current, correct) {
  let [currentHH, currentMM] = current.split(":");
  let [correctHH, correctMM] = correct.split(":");

  let numberOfOperation = 0;

  let hhDiff = Number(correctHH) - Number(currentHH);
  let mmDiff = Number(correctMM) - Number(currentMM);

  console.log({ hhDiff, mmDiff });

  if (mmDiff < 0) {
    mmDiff += 60;
    hhDiff -= 1;
  }

  numberOfOperation += Math.floor(mmDiff / 15);
  mmDiff %= 15;

  numberOfOperation += Math.floor(mmDiff / 5);
  mmDiff %= 5;

  numberOfOperation += mmDiff + hhDiff;

  return numberOfOperation;
};

console.log(convertTime("09:41", "10:34"));
