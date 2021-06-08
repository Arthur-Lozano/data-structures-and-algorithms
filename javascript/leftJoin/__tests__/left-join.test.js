
let hashMerge = require('../left-join');

var mapLeft = new Map([['fond', 'enamored'], ['wrath', 'anger'], ['diligent', 'employed'], ['outift', 'garb'], ['guide', 'usher']]);
var mapRight = new Map([['fond', 'averse'], ['wrath', 'delight'], ['diligent', 'idle'], ['guide', 'follow'], ['flow', 'jam']]);

test('Merges two Hashmaps', () => {
  expect(merge(mapLeft, mapRight)
});
