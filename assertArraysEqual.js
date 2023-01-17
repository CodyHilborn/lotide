// Logs a 'pass/fail' message to the console based on a comparison between an expected array and an actual array.


const eqArrays = require('./eqArrays');

// -------------------------------------------------------------------------------------------

const assertArraysEqual = function(actual, expected) {
  const equalArray = eqArrays(actual, expected);
  if (!equalArray) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
};

// -------------------------------------------------------------------------------------------


module.exports = assertArraysEqual;
