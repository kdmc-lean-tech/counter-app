import { heroes } from './search';

export const getHeroesByIdAsync = (heroeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = heroes.find(h => h.id === heroeId);
      if (!heroe) {
        reject(`The heroe with id ${heroeId} no exist`);
      }
      resolve(heroe);
    }, 1500);
  });
}
