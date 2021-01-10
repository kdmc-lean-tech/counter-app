import { getImage } from "../examples/api-gif";

describe('Api Gif Test', () => {
  test('should return a url (string)', async() => {
    const url = await getImage();
     expect( typeof url ).toBe('string');
  });
});
