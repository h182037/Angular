import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './game';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class GameService {

  private gamesUrl = 'api/games';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Gamees from the server */
  getGames (): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
      .pipe(
        tap(_ => this.log('fetched Games')),
        catchError(this.handleError<Game[]>('getGames', []))
      );
  }

  /** GET Game by id. Return `undefined` when id not found */
  getGameNo404<Data>(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/?id=${id}`;
    return this.http.get<Game[]>(url)
      .pipe(
        map(games => games[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} game id=${id}`);
        }),
        catchError(this.handleError<Game>(`getGame id=${id}`))
      );
  }

  /** GET Game by id. Will 404 if id not found */
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      tap(_ => this.log(`fetched game id=${id}`)),
      catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  /* GET Gamees whose name contains search term */
  searchGames(term: string): Observable<Game[]> {
    if (!term.trim()) {
      // if not search term, return empty Game array.
      return of([]);
    }
    return this.http.get<Game[]>(`${this.gamesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found Games matching "${term}"`)),
      catchError(this.handleError<Game[]>('searchGames', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Game to the server */
  addGame (game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game, this.httpOptions).pipe(
      tap((newGame: Game) => this.log(`added Game w/ id=${newGame.id}`)),
      catchError(this.handleError<Game>('addGame'))
    );
  }

  /** DELETE: delete the Game from the server */
  deleteGame (game: Game | number): Observable<Game> {
    const id = typeof game === 'number' ? game : game.id;
    const url = `${this.gamesUrl}/${id}`;

    return this.http.delete<Game>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Game id=${id}`)),
      catchError(this.handleError<Game>('deleteGame'))
    );
  }

  /** PUT: update the Game on the server */
  updateGame (game: Game): Observable<any> {
    return this.http.put(this.gamesUrl, game, this.httpOptions).pipe(
      tap(_ => this.log(`updated Game id=${game.id}`)),
      catchError(this.handleError<any>('updateGame'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a GameService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GameService: ${message}`);
  }
}
