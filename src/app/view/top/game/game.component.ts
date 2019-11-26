import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../data/player/player.service';
import { Player } from 'src/app/model/player';
import { RunBusinessComponent } from './run-business/run-business.component';
import { HelperService } from 'src/app/helper/helper.service';
import { CONSTANTS } from 'src/app/model/constant';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  player: Player;

  // run timer for the castbar
  // this ticks no matter what, even if the business isn't running
  private timerId: any

  constructor(private playerService: PlayerService, private helperService: HelperService) { }

  ngOnInit() {
    if (!this.player) {
      this.getPlayer();
    }

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.clearTimer()
  }

  // first startup, build the player object
  getPlayer(): void {
    this.playerService.getPlayer()
      .subscribe(player => {
        this.player = player
        this.initTimer()
      });
  }

  reset(): void {
    this.clearTimer()
    this.player.businesses.forEach(business => {
      business.isManaged = false
      business.isRunning = false
    });

    setTimeout(() => {
      Object.keys(localStorage).forEach(key => {
        localStorage.removeItem(key)
      })
      location.reload()
    }, 150);
  }

  initTimer(): void {
    // start counting down the castbar
    this.timerId = setInterval(() => {
      this.helperService.runPlayer(this.player)
    }, CONSTANTS.timerTick);
  }

  clearTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId)
    }
  }

}
