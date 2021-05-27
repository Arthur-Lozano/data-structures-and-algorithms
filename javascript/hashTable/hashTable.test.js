const hash = require('./hashTables');

const quickSort = require('./quickSort');
const array = [10, 2, 3, 9, 7, 6, 5, 8, 4, 1];
const reverseSorted = [20, 18, 12, 8, 5, -2];
const fewUniqe = [5, 12, 7, 5, 5, 7];



test('sorts an array', () => {
  expect(quickSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

});
test('fewUniqe', () => {
  expect(quickSort(fewUniqe)).toEqual([5, 5, 5, 7, 7, 12]);
});

test('Reverse Sorted', () => {
  expect(quickSort(reverseSorted)).toEqual([-2, 5, 8, 12, 18, 20]);
});