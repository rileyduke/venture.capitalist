import { Injectable } from '@angular/core';
import { Business } from '../model/business';
import { Player } from '../model/player';
import { RunBusinessComponent } from '../view/top/game/run-business/run-business.component';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public runPlayer(player: Player): void {
    player.businesses.forEach(business => {
      if (business.getPercentageDone() >= 100) {
        // if not managed, stop running
        if (!business.isManaged) {
          business.isRunning = false
        }

        // score business
        business.scoreBusiness(player)
      }
    });

    player.storePlayer()
  }
}
