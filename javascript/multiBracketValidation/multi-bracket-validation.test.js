'use strict';

const multiBracket = require('./multi-bracket-validation');

test('Returns true', () => {
  expect(multiBracket('{}')).toBe(true); // matcher is what toBe is
});

test('Returns true', () => {
  expect(multiBracket('{}(){}')).toBe(true); // matcher is what toBe is
});

test('Returns true', () => {
  expect(multiBracket('()[[Extra Characters]]')).toBe(true); // matcher is what toBe is
});

test('Returns true', () => {
  expect(multiBracket('(){}[[]]')).toBe(true); // matcher is what toBe is
});

test('Returns true', () => {
  expect(multiBracket('{}{Code}[Fellows](())')).toBe(true); // matcher is what toBe is
});

