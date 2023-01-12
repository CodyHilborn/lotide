const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

// 1. Function takes in a string, add for loop to iterate through the string.
// 2. Loop needs to populate an empty array with each letter that occurs, then increment the value for however many additional times it appears.

// -------------------------------------------------------------------------------------------

const countLetters = function(string) {
  let letterObj = {};
  let inputString = string.split(' ').join('').toLowerCase();
  if (inputString){
    for (const letter of inputString) {
      if (letterObj[letter]) {
        letterObj[letter] += 1;
      } else {
        letterObj[letter] = 1;
      }
    }
  }  
  return letterObj;
};
 
// -------------------------------------------------------------------------------------------
// TEST CASES

const result1 = countLetters('lighthouse in the house');
const result2 = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}


for (key in result1) {
  console.log(assertEqual(result1[key], result2[key]))
};