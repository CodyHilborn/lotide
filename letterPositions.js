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
/*



*/

const letterPositions = function(sentence) {
  const results = {};
  let inputString = sentence.toLowerCase();
  if (inputString) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== ' ') {
        if (results[inputString[i]]) {
          results[inputString[i]].push(i);
        } else {
          results[inputString[i]] = [i];
        }
      }
    }
  }
  return results;
};

// console.log(letterPositions('ha'));

// assertArraysEqual(letterPositions('ha').e, [1]);
