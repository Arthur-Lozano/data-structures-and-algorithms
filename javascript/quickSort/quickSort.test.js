const quickSort = require('./quickSort');
const array = [10, 2, 3, 9, 7, 6, 5, 8, 4, 1];
const array1 = [8, 2, 3, 6, 7, 9, 5, 10, 4, 1];



test('sorts an array', () => {
  expect(quickSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

});
test('sorts array1', () => {
  expect(quickSort(array1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
