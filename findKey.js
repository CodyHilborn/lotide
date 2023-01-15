// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
//   }
// };

const assertEqual = require('./assertEqual')


// -------------------------------------------------------------------------------------------

// Create a function called findKey, takes in an object and a callback.
// Scan object and return first key that returns truthy value.
// Return undefined if no key is found.
// Similar logic to findKeyByValue (looping over object keys).

// const findKeyByValue = function(obj, val) {
//   for (const key in obj) {
//     if (obj[key] === val) {
//       return key;
//     }
//   }
// };



const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])){
      return key;
    }
  }
};

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, (x) => x.stars === 4)), 'elBulli');
 // => "noma"



