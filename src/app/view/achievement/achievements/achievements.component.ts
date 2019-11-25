import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/data/player/player.service';
import { Player } from 'src/app/model/player';
import { Achievement } from 'src/app/model/achievement/achievement';
import { MillionaireAchievement } from 'src/app/model/achievement/millionaire-achievement';
import { AllUpgradedAchievement } from 'src/app/model/achievement/all-upgrade-achievement';
import { AllPurchasedAchievement } from 'src/app/model/achievement/all-purchased-achievement';

@Component({
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  player: Player;
  achievements: Achievement[]

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.achievements = []
    this.getPlayer()

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
}
