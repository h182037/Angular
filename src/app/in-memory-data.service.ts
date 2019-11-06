import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'FUTle' },
      { id: 12, name: 'Jattle' },
      { id: 13, name: 'No-Buttle' },
      { id: 14, name: 'Skjeggle' },
      { id: 15, name: 'Heidle' },
      { id: 16, name: 'Spoodermannle' },
      { id: 17, name: 'Komle' },
      { id: 18, name: 'Geografle' },
      { id: 19, name: 'Angularle' },
      { id: 20, name: 'Liverpatle' }
    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
