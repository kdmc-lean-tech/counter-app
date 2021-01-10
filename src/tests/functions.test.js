import { getUser } from "../examples/functions";

describe('Function Test', () => {
  test('Should return a object', () => {
    const userTest = {
      id: 2,
      username: 'kevin'
    };
    const user = getUser('kevin');
    expect(user).toEqual(userTest);
  });
  test('The username property should be the same as the argument', () => {
    const userTest = {
      id: 2,
      username: 'karla'
    };
    const user = getUser('karla');
    expect(user.username).toEqual(userTest.username);
  });
});
