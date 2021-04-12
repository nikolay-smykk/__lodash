const add = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

const ceil = (x) => {
  return Math.ceil(x);
};
const сenturyFromYear = (year) => {
  return Math.ceil(year / 100);
};

const reverseString = (string) => [...string].reverse().join('');

const maxBy = (arr, key) => arr.reduce((a,b) => a[key] >= b[key] ? a : b, {});

