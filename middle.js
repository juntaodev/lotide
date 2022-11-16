const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArray(arr1, arr2) ? console.log(`👍👍👍Assertion Passed: expected ${arr2} and found ${arr1}`) : console.log(`❌❌❌Assertion Failed: expected ${arr2} instead found ${arr1}`);
};

const middle = function(arr) {
  let mid = [];
  
  if (arr.length > 2 && arr.length % 2 === 1) {
    let middleIndex = 0;
    middleIndex = Math.ceil(arr.length / 2) - 1;
    mid.push(arr[middleIndex]);
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    let firstmiddleIndex = 0;
    let secondMiddleIndex = 0;
    firstmiddleIndex = Math.ceil(arr.length / 2) - 1;
    secondMiddleIndex = Math.ceil(arr.length / 2);
    mid.push(arr[firstmiddleIndex], arr[secondMiddleIndex]);
  }
  
  return mid;
};

// TEST CODE
// test middle function
console.log(middle([1, ]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

// test right output
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// test wrong output
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [2]);
assertArraysEqual(middle([1, 2, 3]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]);