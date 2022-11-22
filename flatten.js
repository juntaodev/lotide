// FUNCTION IMPLEMENTATION
const flatten = function(array) {
  let results = [];
  for (let element of array) {
    if (!Array.isArray(element)) {
      results.push(element);
    }
    if (Array.isArray(element)) {
      for (let i of element) {
        results.push(i);
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = flatten;