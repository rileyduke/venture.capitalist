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

  // percentage calc for display
  public progressPercent: number
  // running bool
  public isRunning: boolean

  // run timer for the castbar
  // this ticks no matter what, even if the business isn't running
  // TODO: create this object only when first business is created
  private timerId: any

  constructor() {
    // this.business.progress = CONSTANTS.progressMin
    this.isRunning = false
  }

  ngOnInit() {
    if (this.business.isManaged) {
      this.runBusiness()
    }

    if (this.business.instanceCount >= 0) {
      this.initTimer()
    }
  }

  // business castbar
  // runs the business and scores it once it meets its desired castpoint
  runBusiness(): void {
    if (!this.isRunning) {
      this.business.progress = 0
      this.isRunning = true
    }
  }

  buyBusiness(): void {
    // initiate the timer (wasn't counting until first one bought)
    if (this.business.instanceCount === 0) {
      this.initTimer()
    }
    // purchase the business with this player
    this.business.purchaseBusiness(this.player)
  }

  buyBusinessManager(): void {
    this.business.puchaseManager(this.player)
    this.runBusiness()
  }

  initTimer(): void {
    // start counting down the castbar
    this.timerId = setInterval(() => {
      if (this.isRunning) {
        this.business.progress += CONSTANTS.tickValue
        this.progressPercent = 100 * (this.business.progress / CONSTANTS.progressMax)

        if (this.business.progress >= CONSTANTS.progressMax) {
          // reset the cast object
          this.business.progress = CONSTANTS.progressMin
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
  }

}
