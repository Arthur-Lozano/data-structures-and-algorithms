'use strict';

let newMap = [];
var mapLeft = new Map([['key1', 'synonym'], ['key2', 'synonym'], ['key3', 'synonym']]);
console.log(mapLeft);
var mapRight = new Map([['key1', 'antonym'], ['key2', 'antonym']]);
console.log(mapRight.get('key1'));
let hashMerge = mapLeft.forEach((value, key) => {
  let newItem = [];
  newItem.push(key);
  newItem.push(value);
  if (mapRight.get(key)) {
    newItem.push(mapRight.get(key));
  } else {
    newItem.push('null');
  }
  newMap.push(newItem);
});
console.log(newMap);

module.exports = hashMerge;

