import { Deck } from "./cards.js";

export const getRandNum = function (x) {
  let rand = Math.floor(Math.random() * x);
  return rand;
};

export const upOrRev = (x, y) => {
  let up = getRandNum(2);
  if (up === 0) {
    x.classList.add("flip");
    y.textContent += " (Reversed)";
  }
  if (up === 1) {
    x.classList.remove("flip");
  }
};

export const init = function (x, y, z, x2, y2, z2, x3, y3, z3) {
  let [num1, num2, num3] = [19, 17, 42];
  let [label1, label2, label3] = [
    Deck[num1].label,
    Deck[num2].label,
    Deck[num3].label,
  ];
  let [read1, read2, read3] = [
    Deck[num1].readings.light,
    Deck[num2].readings.light,
    Deck[num3].readings.light,
  ];
  let [icard1, icard2, icard3] = [
    `imgs/${num1}.jpg`,
    `imgs/${num2}.jpg`,
    `imgs/${num3}.jpg`,
  ];
  x.src = icard1;
  y.textContent = `${label1}`;
  z.textContent = read1;
  x2.src = icard2;
  y2.textContent = `${label2}`;
  z2.textContent = read2;
  x3.src = icard3;
  y3.textContent = `${label3}`;
  z3.textContent = read3;
};

export const cardGen = function (x, y, z) {
  let num = getRandNum(78);
  let label = Deck[num].label;
  let light = Deck[num].readings.light;
  let dark = Deck[num].readings.dark;
  let randCard = `imgs/${num}.jpg`;
  x.src = randCard;
  y.textContent = `${label}`;
  upOrRev(x, y);
  if (y.textContent.includes(" (Reversed)")) {
    z.textContent = dark;
  } else z.textContent = light;
};
