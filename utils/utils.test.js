const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA('number');
});

it('should square a number', () => {
  let res = utils.square(4);

  expect(res)
    .toBe(16)
    .toBeA('number');
});