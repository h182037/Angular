import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames()
    .subscribe(games => this.games = games);
  }

  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name) { return; }
    let ratings = [];
    let score = 0;
    let comments = [];
    this.gameService.addGame({ name, description, ratings, score, comments} as Game)
      .subscribe(game => {
        this.games.push(game);
      });
  }

  delete(game: Game): void {
    this.games = this.games.filter(g => g !== game);
    this.gameService.deleteGame(game).subscribe();
  }

}
