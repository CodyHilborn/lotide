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


const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  const middleIndex = (arr.length / 2);
  console.log(middleIndex)
  if (Number.isInteger(middleIndex)) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[Math.floor(middleIndex)]];
  }
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(middle(testArray));

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); 