import { Component, OnInit, Input } from '@angular/core';
import { Business } from 'src/app/model/business';
import { CONSTANTS } from 'src/app/model/constant';
import * as Feather from 'feather-icons';

import { Observable, of, timer } from 'rxjs';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-run-business',
  templateUrl: './run-business.component.html',
  styleUrls: ['./run-business.component.css']
})
export class RunBusinessComponent implements OnInit {
  // this business
  @Input() business: Business
  // global player
  @Input() player: Player

  public progress: number
  public progressPercent: number
  public isRunning: boolean
  constructor() {
    this.progress = CONSTANTS.progressMin
    this.isRunning = false
  }

  // start counting down the castbar
  private timerId = setInterval(() => {
    if (this.isRunning) {
      this.progress += CONSTANTS.tickValue
      this.progressPercent = 100 * (this.progress / CONSTANTS.progressMax)

      if (this.progress >= CONSTANTS.progressMax) {
        // reset the cast object
        this.progress = CONSTANTS.progressMin
        this.progressPercent = 0

        // if not managed, stop running
        if (!this.business.isManaged) {
          this.isRunning = false
        }

        // score business
        this.player.money += this.business.getIncome()
      }
    }

  }, CONSTANTS.timerTick);

  ngOnInit() {

  }

  // business castbar
  // runs the business and scores it once it meets its desired castpoint
  runBusiness(): void {
    if (!this.isRunning) {
      this.progress = 0
      this.isRunning = true
    }
  }

  buyBusiness(): void {
    this.business.purchaseBusiness(this.player)
  }

  buyBusinessManager(): void {
    this.business.puchaseManager(this.player)
  }

}
