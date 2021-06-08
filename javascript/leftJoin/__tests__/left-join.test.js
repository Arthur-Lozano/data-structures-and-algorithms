
let hashMerge = require('../left-join');

describe('Merges two Hashmaps', () => {
  const mapLeft = new Map([['fond', 'enamored'], ['wrath', 'anger'], ['diligent', 'employed'], ['outift', 'garb'], ['guide', 'usher']]);

  const mapRight = new Map([['fond', 'averse'], ['wrath', 'delight'], ['diligent', 'idle'], ['guide', 'follow'], ['flow', 'jam']]);


  it('Add values to the hash tables', () => {
    expect(expect(mapLeft.has('fond')).toBeTruthy());
    expect(expect(mapRight.has('wrath')).toBeTruthy());
  });
});
