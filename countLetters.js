// FUNCTION IMPLEMENTATION
const countLetters = function(sentence) {
  let results = {};
  for (let char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

