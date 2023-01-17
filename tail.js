// const assertEqual = require('./assertEqual');

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


module.exports = tail;



