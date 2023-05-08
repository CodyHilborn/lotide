const flatten = (array) => {
  return [].concat(...array)
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));