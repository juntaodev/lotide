// FUNCTION IMPLEMENTATION
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

module.exports = without;