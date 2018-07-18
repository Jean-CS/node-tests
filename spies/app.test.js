const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('John', 65);
    expect(spy).toHaveBeenCalledWith('Andrew', 25); // false
  });
});