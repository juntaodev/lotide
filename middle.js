// FUNCTION IMPLEMENTATION
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

module.exports = middle;
