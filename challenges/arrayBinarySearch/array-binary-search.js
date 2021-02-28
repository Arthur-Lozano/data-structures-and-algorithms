'use strict';

let array = [1, 4, 8, 15, 22, 25, 28, 40, 43, 45, 50];

let key = 40;
let start = 0;
let end = array.length - 1;
let middleIndex;
let middleValue;
let diff;


console.log('start', start);
console.log('end', end);

const binarySearch = (array, key) => {

  diff = Math.floor((end - start) / 2);
  middleIndex = start + diff;
  middleValue = array[middleIndex];

  console.log('new diff', diff);
  console.log('new middle', middleIndex);
  console.log('new mid val', array[middleIndex]);

  if (key > middleValue) {
    start = middleIndex + 1;
    console.log('new start', start);
    binarySearch(array, key);

  } else if (key < middleValue) {
    end = middleIndex - 1;
    binarySearch(array, key);
  } else if (key === undefined) {
    console.log('Key is undefined.');
  } else if (key === middleValue) {
    console.log('key found at index: ', middleIndex);
  } else {
    console.log('Key not found');
  }
}


module.exports = binarySearch;

