// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍👍👍Assertion Passed => actual: ${actual} === expected: ${expected}`) : console.log(`❌❌❌Assertion Failed => actual: ${actual} !== expected: ${expected}`);
};



module.exports = assertEqual;