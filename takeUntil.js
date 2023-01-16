
// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require('./eqArrays');

// -------------------------------------------------------------------------------------------

// const assertArraysEqual = function(actual, expected) {
//   const equalArray = eqArrays(actual, expected);
//   if (equalArray) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
//   }
// };

const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------

/*
- Create function that accepts an array and a callback function;
- 
*/



const takeUntil = (array, callback) => {
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item))
    }
  }
};


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);


module.exports = takeUntil;