const eqArray = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArray(arr1, arr2) ? console.log(`👍👍👍Assertion Passed: source array not changed`) : console.log(`❌❌❌Assertion Failed: source array changed`);
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
  return newArray;
};

// TEST CODE
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
without(["tomato", "potato", "gelato"], ["ice", "cream", "gelato"]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [1, 2, 3, 4, 5];
without(numbers, [1, 2, 3]);
assertArraysEqual(numbers, [1, 2, 3, 4, 5]);