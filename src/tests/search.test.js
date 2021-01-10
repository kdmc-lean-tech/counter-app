import { getHeroeById, heroes, getHeroesByStatus } from "../examples/search";

describe('Search Tests', () => {
  test('should return a object with id', () => {
    const heroeTest = { id: 3,  name: 'Wonder Woman', status: true, owner: 'DC' };
    const heroe = getHeroeById(3);
    expect(heroe).toEqual(heroeTest);
  });
  test('should return undefined', () => {
    const heroe = getHeroeById(25);
    expect(heroe).toBeUndefined();
  });
  test('should return only array DC heroes', () => {
    const status = true;
    const heroesData = heroes;
    const heroesTest = heroesData.filter(heroe => heroe.status === status);
    const heroesResult = getHeroesByStatus(status);
    expect(heroesResult).toEqual(heroesTest);
  });
  test('should return a array with only length 2', () => {
    const status = true;
    const heroesResult = getHeroesByStatus(status);
    expect(heroesResult.length).toEqual(2);
  });
});
