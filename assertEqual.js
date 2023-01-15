const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
    return;
  } 

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
};



// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('key', 'keys');
// assertEqual('finger', 'finger');
// assertEqual('11', 11);
// assertEqual(11, 11);

module.exports = assertEqual;


