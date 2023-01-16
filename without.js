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

const without = function(source, itemsToRemove) {
  const newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};







// console.log(without([1, 2, 3, 2, 3, 1, 2, 3, 1, 3], [1, 2, 3]));


