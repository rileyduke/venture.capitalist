import { Injectable } from '@angular/core';
import { PLAYER } from './mock/mock-player';
import { Player } from 'src/app/model/player';
import { Observable, of } from 'rxjs';
import { Business } from 'src/app/model/business';

import PlayerJson from 'src/static/json/playerJson.json';
import { BusinessService } from '../business/business.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private businessService: BusinessService) { }

  // get the player object
  // player is stored in the browser localstorage as JSON
  getPlayer(): Observable<Player> {
    const tempPlayer: Player = JSON.parse(localStorage.getItem('player'))

    let player: Player
    if (tempPlayer) {
      player = new Player([], tempPlayer.money, tempPlayer.playerName)
    } else {
      player = new Player(PlayerJson.businesses, PlayerJson.money, PlayerJson.playerName)
      const person = prompt('Please enter your name', 'Riley')
      player.playerName = person
    }

    // populate with businesses from localstorage or json
    this.businessService.populateBusinesses(player)

    // TODO: seed from a json file or something
    // set to mocked data
    if (!player) {
      player = PLAYER
    }

    // get anything that happened offline
    player.pickupOfflineFunds()

    // store
    player.storePlayer()

    // return observable
    return of(player);
  }
}
