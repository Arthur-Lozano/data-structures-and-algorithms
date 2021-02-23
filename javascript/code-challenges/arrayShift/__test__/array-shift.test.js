'use strict';

const arrayShift = require('../array-shift.js');

describe('Array Shift', () => {
  it('should shift the array', () => {
    let array = [1, 2, 4, 5];
    let expected = [1, 2, 3, 4, 5];
    arrayShift(array, 3);
    expect(array).toEqual(expected);
  });
});

describe('Array Shift', () => {
  it('should shift the array', () => {
    let array = [1, 2, 4, 5, 6];
    let expected = [1, 2, 4, 3, 5, 6];
    arrayShift(array, 3);
    expect(array).toEqual(expected);
  });
});