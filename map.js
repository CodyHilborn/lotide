
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

// -------------------------------------------------------------------------------------------

const assertArraysEqual = function(actual, expected) {
  const equalArray = eqArrays(actual, expected);
  if (equalArray) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

// -------------------------------------------------------------------------------------------


const words = ['welcome', 'to', 'the', 'jungle'];
const numbers = [1, 2, 3, 4]

const map = function(list, action) {
  const output= [];
  for (let item of list) {
    output.push(action(item))
  }
  return output;
};


// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// const results2 = map(numbers, (num) => num);
// console.log(results2)

// assertArraysEqual(results2, [1, 2, 3, 4]);

