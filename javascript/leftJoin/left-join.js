'use strict';

let leftJoin = (mapLeft, mapRight) => {
  let newMap = [];
  mapLeft.forEach((value, key) => {
    let newItem = [];
    newItem.push(key);
    newItem.push(value);
    if (mapRight.get(key)) {
      newItem.push(mapRight.get(key));
    } else {
      newItem.push('null');
    }
  });
  return newMap;
};

module.exports = leftJoin;

// var mapLeft = new Map([['key1', 'synonym'], ['key2', 'synonym'], ['key3', 'synonym']]);
// var mapRight = new Map([['key1', 'antonym'], ['key2', 'antonym']]);
