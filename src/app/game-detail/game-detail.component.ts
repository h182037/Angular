import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game }         from '../game';
import { GameService }  from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: [ './game-detail.component.css' ]
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }

  rateGame(val: number): void{
    this.game.ratings[this.game.ratings.length] = val;
    var sum = 0;
    this.game.ratings.forEach(number =>{
      sum += number;
    });
    this.game.score = sum/this.game.ratings.length;
    this.save();
  }
  comment(val : string) : void {
    if(val != ""){
    this.game.comments[this.game.comments.length] = val;
    console.log(val);
    this.gameService.updateGame(this.game).subscribe();
    }
  }
  goBack(): void {
    this.location.back();
  }
 save(): void {
    this.gameService.updateGame(this.game)
      .subscribe(() => this.goBack());
  }
}
