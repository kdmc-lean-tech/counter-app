export const heroes = [
  { id: 1, name: 'Batman', status: true, owner: 'DC' },
  { id: 2, name: 'Iroman', status: false, owner: 'Marvel' },
  { id: 3,  name: 'Wonder Woman', status: true, owner: 'DC' }
];

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
export const getHeroesByStatus = (status) => heroes.filter(heroe => heroe.status === status);
