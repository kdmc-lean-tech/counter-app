import { greeting } from "../examples/strings";

describe('Strings Test', () => {
  test('Should return Hello + name argument', () => {
    const name = 'jessica';
    const result = greeting(name);
    expect(result).toBe(`Hello ${ name }`);
  });
  test('Should return Hello kevin, if you do not have the argument', () => {
    const result = greeting();
     expect(result).toBe('Hello kevin');
  });
});
