// Logs a 'pass/fail' message to the console based on a comparison between an expected output and an actual output.

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
    return;
  } 

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
};



module.exports = assertEqual;


