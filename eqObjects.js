// Compares between two objects to see if they are an exact equal match.

const eqArrays = require('./eqArrays');

// -------------------------------------------------------------------------------------------


const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (eqArrays(obj1[key], obj2[key]) === false) {
      return false;
    }
  }
  return true;
};


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// // => false

// eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true;


module.exports = eqObjects;