const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

// -------------------------------------------------------------------------------------------

const tail = function(arr) {
  let arrTail = arr;
  arrTail = arrTail.slice(1);
  return arrTail;
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(words, tail(words));




const result = [2, 3, 4, 5];

console.log(result);
console.log(tail(result));

console.log(assertEqual(tail(result)[0], 3));





