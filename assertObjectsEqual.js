// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let result = false;
  if (keys1.length === keys2.length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  actual === expected ? console.log(`👍👍👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true

module.exports = assertObjectsEqual;