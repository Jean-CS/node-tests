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

// it('should expect some values', () => {
//   // expect(12).toNotBe(5); // true

//   // expect({name: 'John Doe'}).toEqual({name: 'John Doe'}); // true
//   // expect({name: 'Brittany'}).toNotEqual({name: 'John Doe'}); // true
  
//   // expect([2, 3, 4]).toInclude(5); // false
//   // expect([2, 3, 4]).toExclude(1); // true
  
//   expect({
//     name: 'John',
//     age: 24,
//     location: 'Taiwan'
//   }).toInclude({
//     age: 24
//   }); // true
  
//   expect({
//     name: 'John',
//     age: 24,
//     location: 'Taiwan'
//   }).toExclude({
//     age: 23
//   }); // true
// });