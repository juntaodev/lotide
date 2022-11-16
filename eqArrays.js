const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS