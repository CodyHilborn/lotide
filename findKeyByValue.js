// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
//   }
// };

const assertEqual = require('./assertEqual');

// -------------------------------------------------------------------------------------------



const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};




// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);