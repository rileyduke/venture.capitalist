import { Injectable } from '@angular/core';
import { PLAYER } from './mock/mock-player';
import { Player } from 'src/app/model/player';
import { Observable, of } from 'rxjs';
import { Business } from 'src/app/model/business';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  // get the player object
  // player is stored in the browser localstorage as JSON
  getPlayer(): Observable<Player> {
    const tempPlayer: Player = JSON.parse(localStorage.getItem('player'))

    let player = new Player([], tempPlayer.money, tempPlayer.playerName)

    // TODO: delegate this to business service
    // foreach business key in localstorage
    Object.keys(localStorage).filter(x => x.match('business-')).forEach(k => {
      const bus: Business = JSON.parse(localStorage[k])
      const b = new Business( bus.castTime,
        bus.baseIncome,
        bus.buffedIncome,
        bus.instanceCount,
        bus.isManaged,
        bus.managerCost,
        bus.businessName,
        bus.baseBusinessCost,
        bus.progress,
        bus.lastScored,
        bus.lastStarted,
        bus.isRunning)

      // push the business to the player's array
      player.businesses.push(b)
    })

    // TODO: seed from a json file or something
    // set to mocked data
    if (!player) {
      player = PLAYER
    }

    player.pickupOfflineFunds()

    // return observable
    return of(player);
  }
}
