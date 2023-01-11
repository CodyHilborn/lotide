// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑🛑🛑`);
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑🛑🛑`);
//     }
//   }
//   return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} ✅✅✅`);
// };


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



const assertArraysEqual = function(actual, expected) {
  const equalArray = eqArrays(actual, expected);
  if (equalArray) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
