import { InMemoryDbService, removeTrailingSlash } from 'angular-in-memory-web-api';
import { Game } from './game';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, name: 'Red Dead Redemption 2', description: "Riding horses", ratings: [4, 4, 5, 5, 5], score: 0},
      { id: 12, name: 'Fifa 20', description: "Ruining friendships",ratings: [4, 3, 5, 2, 5], score: 0},
      { id: 13, name: 'Hearthstone',description: "Being a nerd", ratings: [1, 1, 5, 5, 5], score: 0},
      { id: 14, name: 'The Witcher 3', description: "Wiedrmin",ratings: [4, 5, 5, 5, 5], score: 0},
      { id: 15, name: 'The Last of Us 2', description: "Long escorting quest",ratings: [4, 4, 5, 5, 5, 4, 5], score: 0},
      { id: 16, name: 'Cyberpunk', description: "its da future",ratings: [4, 4, 2, 5, 5, 3 , 5], score: 0},
      { id: 17, name: 'Death Stranding', description: "Walking simulator",ratings: [1, 4, 5, 5, 5, 4, 3], score: 0},
      { id: 18, name: 'Monster Hunter World', description: "Japaneese dragons",ratings: [3, 3, 3, 4, 5], score: 0},
      { id: 19, name: 'World of Warcraft',description: "Virginity and mountain dew",ratings: [4, 4, 5, 5, 5, 2, 2, 2], score: 0},
      { id: 20, name: 'Fårtnait' , description: "Screaming children",ratings: [4, 4, 5, 5, 5, 5, 1, 1], score: 0},
      { id: 21, name: 'Conkers Bad Fur day', description: "Drunk squirrel", ratings: [4, 5, 5, 5, 5], score: 0},
      { id: 22, name: 'League of Legends', description: "4 buttons is all you need",ratings: [4, 4, 5, 3, 3], score: 0}
    ];
    games.forEach(game => {
      var sum = 0;
      game.ratings.forEach(rating=>{
          sum += rating;
          game.score = sum/game.ratings.length;
      });
    });
    return {games};
  }
  
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(Game => Game.id)) + 1 : 11;
  }
}