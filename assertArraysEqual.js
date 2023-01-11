const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑🛑🛑`);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2} 🛑🛑🛑`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} ✅✅✅`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 4, 3]);
