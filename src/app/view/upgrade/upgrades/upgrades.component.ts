import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/data/player/player.service';
import { Player } from 'src/app/model/player';
import { HelperService } from 'src/app/helper/helper.service';
import { CONSTANTS } from 'src/app/model/constant';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  player: Player;

  // run timer for the castbar
  // this ticks no matter what, even if the business isn't running
  private timerId: any

  constructor(private playerService: PlayerService, private helperService: HelperService) { }

  ngOnInit() {
    this.getPlayer()
    this.initTimer()
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId)
    }
  }

  getPlayer(): void {
    this.playerService.getPlayer()
      .subscribe(player => this.player = player)
  }

  initTimer(): void {
    // start counting down the castbar
    this.timerId = setInterval(() => {
      this.helperService.runPlayer(this.player)
    }, CONSTANTS.timerTick);
  }

}
