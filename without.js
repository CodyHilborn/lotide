// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------

const without = function(source, itemsToRemove) {
  const newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};

module.exports = without;





// console.log(without([1, 2, 3, 2, 3, 1, 2, 3, 1, 3], [1, 2, 3]));


