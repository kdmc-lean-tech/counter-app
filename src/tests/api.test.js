import { getHeroesByIdAsync } from "../examples/api";

describe('Api Test', () => {
  test('should return heroe with id', (done) => {
    const heroeId = 2;
    const heroeTest = { id: 2, name: 'Iroman', status: false, owner: 'Marvel' };
    getHeroesByIdAsync(heroeId)
      .then(heroe => {
         expect(heroe).toEqual(heroeTest);
         done();
      });
  });
  test('should return -> The heroe with id heroeId no exist', (done) => {
    const heroeId = 25;
    getHeroesByIdAsync(heroeId)
      .catch(heroe => {
        expect(heroe).toEqual(`The heroe with id 25 no exist`);
        done();
      });
  });
});
