// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  const middleIndex = (arr.length / 2);

  if (Number.isInteger(middleIndex)) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  return [arr[Math.floor(middleIndex)]];
};

module.exports = middle;



