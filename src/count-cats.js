const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let cat = '^^';
  let count = 0;
  for (let subArr of arr) {
    for (let elem of subArr) {
      if (elem == cat) {
        count++;
      }
    }
  }
  return count;
  };
