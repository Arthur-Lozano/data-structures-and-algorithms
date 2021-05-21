'use strict';


function mergeSort(unsortedArray) {
  //return array back if length is 1
  if (unsortedArray.length <= 1) {
    return unsortedArray;
    //return [min,max] if array has only two elements
  } else if (unsortedArray.length <= 2) {
    return [Math.min.apply(null, unsortedArray),
    Math.max.apply(null, unsortedArray)];
  }
  //if array has more than two elements it must be split
  //first find middle point
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  // With the array now split in two recursively call merge Sort and
  //combine results
  return merge(mergeSort(left), mergeSort(right));
}
//Merge combines reults of two merge sorts
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return [...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

module.exports = mergeSort;