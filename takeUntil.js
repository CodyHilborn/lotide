// Loops through an array until the first element specified in the callback function is found, then returns every element from the 0th index until the specified element.


// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------

const takeUntil = (array, callback) => {
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item))
    }
  }
};


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);


module.exports = takeUntil;