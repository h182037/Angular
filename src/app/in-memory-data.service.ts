import { InMemoryDbService, removeTrailingSlash } from 'angular-in-memory-web-api';
import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, name: 'Red Dead Redemption 2', description: "Play a comboy in this vast RPG", ratings: [4, 4, 5, 5, 5],},
      { id: 12, name: 'Fifa 20',description: "Play football like never before", ratings: [4, 3, 5, 2, 5]},
      { id: 13, name: 'Hearthstone',description: "Card game where skills dont matter", ratings: [1, 1, 5, 5, 5]},
      { id: 14, name: 'The Witcher 3',description: "Be the the witcher, hunt monsters and men, while looking for Ciri", ratings: [4, 5, 5, 5, 5]},
      { id: 15, name: 'The Last of Us 2',description: "Play Ellie on revenge killing spree ", ratings: [4, 4, 5, 5, 5, 4, 5]},
      { id: 16, name: 'Cyberpunk',description: "Open world city RPG set in the year 2077 by the developers behind The witcher", ratings: [4, 4, 2, 5, 5, 3 , 5]},
      { id: 17, name: 'Death Stranding',description: "Walk, and walk, and walk some more", ratings: [1, 4, 5, 5, 5, 4, 3]},
      { id: 18, name: 'Monster Hunter World',description: "Die again and again", ratings: [3, 3, 3, 4, 5]},
      { id: 19, name: 'World of Warcraft',description: "Grind, leroy, griiind",ratings: [4, 4, 5, 5, 5, 2, 2, 2]},
      { id: 20, name: 'Fårtnait' , description: "This game is for children",ratings: [4, 4, 5, 5, 5, 5, 1, 1]},
      { id: 21, name: 'Conkers Bad Fur day',description: "Dunno", ratings: [4, 5, 5, 5, 5]},
      { id: 22, name: 'League of Legends',description: "if you aint asian, you aint winning", ratings: [4, 4, 5, 3, 3]}
    ];
    return {games};
  }
  
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(Game => Game.id)) + 1 : 11;
  }


}
