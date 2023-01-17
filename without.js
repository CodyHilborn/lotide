// Accepts a source array and an array of items to remove, then returns a new array of only items not included in the itemsToRemove array.


// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// -------------------------------------------------------------------------------------------


const without = function(source, itemsToRemove) {
  let output;
  output = source.filter(val => !itemsToRemove.includes(val));
  return output;
};

module.exports = without;



// console.log(without([1, 2, 3, 2, 3, 1, 2, 3, 1, 3], [1, 3]));



// const without = function(source, itemsToRemove) {
//   const newArr = [];
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] !== itemsToRemove[j]) {
//         newArr.push(source[i]);
//       }
//     }
//   }
//   return newArr;
// };