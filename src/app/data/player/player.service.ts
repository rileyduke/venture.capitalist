import { Injectable } from '@angular/core';
import { PLAYER } from './mock/mock-player';
import { Player } from 'src/app/model/player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayer(): Observable<Player> {
    return of(PLAYER);
  }
}
