import { InMemoryDbService, removeTrailingSlash } from 'angular-in-memory-web-api';
import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, name: 'Red Dead Redemption 2', ratings: [4, 4, 5, 5, 5]},
      { id: 12, name: 'Fifa 20', ratings: [4, 3, 5, 2, 5]},
      { id: 13, name: 'Hearthstone', ratings: [1, 1, 5, 5, 5]},
      { id: 14, name: 'The Witcher 3', ratings: [4, 5, 5, 5, 5]},
      { id: 15, name: 'The Last of Us 2', ratings: [4, 4, 5, 5, 5, 4, 5]},
      { id: 16, name: 'Cyberpunk', ratings: [4, 4, 2, 5, 5, 3 , 5]},
      { id: 17, name: 'Death Stranding', ratings: [1, 4, 5, 5, 5, 4, 3]},
      { id: 18, name: 'Monster Hunter World', ratings: [3, 3, 3, 4, 5]},
      { id: 19, name: 'World of Warcraft',ratings: [4, 4, 5, 5, 5, 2, 2, 2]},
      { id: 20, name: 'Fårtnait' , ratings: [4, 4, 5, 5, 5, 5, 1, 1]},
      { id: 21, name: 'Conkers Bad Fur day', ratings: [4, 5, 5, 5, 5]},
      { id: 22, name: 'League of Legends', ratings: [4, 4, 5, 3, 3]}
    ];
    return {games};
  }
  
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(Game => Game.id)) + 1 : 11;
  }


}
