// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`👍👍👍Assertion Passed => Array1: ${JSON.stringify(arr1)} === Array2: ${JSON.stringify(arr2)}`) : console.log(`❌❌❌Assertion Failed => Array1: ${JSON.stringify(arr1)} !== Array2: ${JSON.stringify(arr2)}`);
};

module.exports = assertArraysEqual;