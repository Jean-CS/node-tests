const expect = require('expect');
const rewire = require('rewire');

var app = rewire("./app");

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call saveUser with user object', () => {
    let email = "test@email.com";
    let password = "awe123";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('John', 65);
    expect(spy).toHaveBeenCalledWith('Andrew', 25); // false
  });
});