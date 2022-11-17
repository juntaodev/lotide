const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let result = {};
  for (let char of sentence) {
    if (char !== " ") {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

// console.log(countLetters("lighthouse in the house"));
// TEST CODE
console.log(countLetters("lighthouse in the house"));

