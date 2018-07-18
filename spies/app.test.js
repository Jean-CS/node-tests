const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled(); // true
  });
});