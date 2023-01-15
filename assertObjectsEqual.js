// const eqObjects = function(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (const key in obj1) {
//     if (Array.isArray(obj1[key])) {
//       return eqArrays(obj1[key], obj2[key])
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqObjects = require('./eqObjects');

// -------------------------------------------------------------------------------------------

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const equalObject = eqObjects(actual, expected)
    if (equalObject) {
      return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
    }
};


assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });

