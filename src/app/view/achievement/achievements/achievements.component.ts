import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/data/player/player.service';
import { Player } from 'src/app/model/player';
import { Achievement } from 'src/app/model/achievement/achievement';
import { MillionaireAchievement } from 'src/app/model/achievement/millionaire-achievement';
import { AllUpgradedAchievement } from 'src/app/model/achievement/all-upgrade-achievement';
import { AllPurchasedAchievement } from 'src/app/model/achievement/all-purchased-achievement';
import { CONSTANTS } from 'src/app/model/constant';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  player: Player;
  achievements: Achievement[]

  // run timer for the castbar
  // this ticks no matter what, even if the business isn't running
  private timerId: any

  constructor(private playerService: PlayerService, private helperService: HelperService) { }

  ngOnInit() {
    this.achievements = []
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
      .subscribe(player => {
        this.player = player

        this.initAchievements()
      })
  }

  initAchievements(): void {
    this.achievements.push(new MillionaireAchievement(this.player))
    this.achievements.push(new AllUpgradedAchievement(this.player))
    this.achievements.push(new AllPurchasedAchievement(this.player))
  }

  initTimer(): void {
    // start counting down the castbar
    this.timerId = setInterval(() => {
      this.helperService.runPlayer(this.player)
    }, CONSTANTS.timerTick);
  }
}
