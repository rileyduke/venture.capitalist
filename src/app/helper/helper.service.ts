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
        // this.player.money += this.business.getIncome()
        business.scoreBusiness(player)
      }
    });
  }

  public runBusinessComponent(runBusinessComponent: RunBusinessComponent): void {
    if (runBusinessComponent.business.isRunning) {
      runBusinessComponent.progressPercent = runBusinessComponent.business.getPercentageDone() // 100 * (this.business.progress / CONSTANTS.progressMax)

      if (runBusinessComponent.progressPercent >= 100) {
        runBusinessComponent.progressPercent = 0

        // if not managed, stop running
        if (!runBusinessComponent.business.isManaged) {
          runBusinessComponent.business.isRunning = false
        }

        // score business
        // this.player.money += this.business.getIncome()
        runBusinessComponent.business.scoreBusiness(runBusinessComponent.player)
      }
    }
  }
}
