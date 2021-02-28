
const functions = require('./array-binary-search.js');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4); // matcher is what toBe is
})

test('Adds 2 + 2 to equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5); // matcher is what toBe is
})

//To be Null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull(); // matcher is what toBe is
})

//toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy(); // matcher is what toBe is
})

//toEqual
test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' }); // matcher is what toBe is
})

//toEqual
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600); // matcher is what toBe is
});