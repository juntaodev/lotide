const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`👍👍👍Assertion Passed => Array1: ${JSON.stringify(arr1)} === Array2: ${JSON.stringify(arr2)}`) : console.log(`❌❌❌Assertion Failed => Array1: ${JSON.stringify(arr1)} !== Array2: ${JSON.stringify(arr2)}`);
};


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

module.exports = assertArraysEqual;