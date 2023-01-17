// Returns an object that contains the indicies of each letter from a sentence.

// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------

const letterPositions = function(sentence) {
  let results = {};
  let inputString = sentence.toLowerCase();
  if (inputString) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== ' ') {
        if (!results[inputString[i]]) {
          results[inputString[i]] = [];
        }
        results[inputString[i]].push(i);
      }
    }
  }
  return results;
};

// console.log(letterPositions(''));

// assertArraysEqual(letterPositions('helper').e, [1, 4]);

module.exports = letterPositions;
