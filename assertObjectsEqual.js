// Logs a 'pass/fail' message to the console based on a comparison between an expected object and an actual object.

const eqObjects = require('./eqObjects');

// -------------------------------------------------------------------------------------------

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const equalObjects = eqObjects(actual, expected);
  if (!equalObjects) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });

