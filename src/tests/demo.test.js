
describe('Demo Tests', () => {
  test('Should be equal double strings', () => {
    // 1. Init
    const message = 'Hello World';
    // 2. Stimulus
    const message2 = 'Hello World';
    // 3. Observer Behaviuor
    expect(message).toBe(message2);
  });
});
