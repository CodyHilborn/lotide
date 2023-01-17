// Returns the middle element(s) of an array. If the length of the array is an odd number, it returns 1 middle element. If it's an even number, it returns the two middle elements.

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



