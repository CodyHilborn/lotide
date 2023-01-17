// Uses a callback function to find the first key that returns a truthy value.


const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// assertEqual((findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri": { stars: 3 },
  //   "noma": { stars: 2 },
  //   "elBulli": { stars: 3 },
  //   "Ora": { stars: 2 },
  //   "Akelarre": { stars: 3 }
  // }, (x) => x.stars === 4)), 'elBulli');
  // // => "noma"
  
  module.exports = findKey;
  
  
  
  
  
  // Create a function called findKey, takes in an object and a callback.
  // Scan object and return first key that returns truthy value.
  // Return undefined if no key is found.
  // Similar logic to findKeyByValue (looping over object keys).