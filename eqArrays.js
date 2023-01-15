// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
//   }
// };

const assertEqual = require('./assertEqual');

/*
1. Create function w/ 2 arrays as parameters

2. Create loop in function to iterate through both arrays.

3. Check if value at each index of first array is exactly equal to same index of second array.

4. Make 'true' default return, insert conditional to check for false within looop so that it will break the loop upon any instance of a non-match.

5. Add conditional to check if the lengths do not match, return false if so.

*/

// -------------------------------------------------------------------------------------------

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);

module.exports = eqArrays;
