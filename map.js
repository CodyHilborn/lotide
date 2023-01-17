// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------


// const words = ['ground', 'control', 'to', 'major', 'tom'];
// const numbers = [1, 2, 3, 4];

const map = function(array, callback) {
  const output = [];
  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};


// const results1 = map(words, (word) => word[0]);
// const results2 = map(words, (word) => word + word);
// const results3 = map(words, (word) => word[0] + word[word.length - 1]);


module.exports = map;



// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results2, [
//   "groundground",
//   "controlcontrol",
//   "toto",
//   "majormajor",
//   "tomtom",
// ]);
// assertArraysEqual(results3, ["gd", "cl", "to", "mr", "tm"]);

// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// const results2 = map(numbers, (num) => num);
// console.log(results2)

// assertArraysEqual(results2, [1, 2, 3, 4]);

