'use strict';

let newMap = [];
var mapLeft = new Map([['key1', 'synonym'], ['key2', 'synonym'], ['key3', 'synonym']]);
console.log(mapLeft);
var mapRight = new Map([['key1', 'antonym'], ['key2', 'antonym']]);
console.log(mapRight.get('key1'));
mapLeft.forEach((value, key) => {
  let newEntry = [];
  newEntry.push(key);
  newEntry.push(value);
  if (mapRight.get(key)) {
    newEntry.push(mapRight.get(key));
  } else {
    newEntry.push('NULL');
  }
  newMap.push(newEntry);
});
console.log(newMap);



