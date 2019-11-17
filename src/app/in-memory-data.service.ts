import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Red Dead Redemption 2' },
      { id: 12, name: 'Fifa 20' },
      { id: 13, name: 'Hearthstone' },
      { id: 14, name: 'The Witcher 3' },
      { id: 15, name: 'The Last of Us' },
      { id: 16, name: 'Cyberpunk' },
      { id: 17, name: 'Death Stranding' },
      { id: 18, name: 'Monster Hunter World' },
      { id: 19, name: 'World of Warcraft' },
      { id: 20, name: 'Fårtnait' },
      { id: 21, name: 'Conkers Bad Fur day'},
      { id: 22, name: 'League of Legends' },



    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
