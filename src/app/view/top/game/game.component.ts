import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../data/player/player.service';
import { Player } from 'src/app/model/player';
import { RunBusinessComponent } from './run-business/run-business.component';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    if (!this.player) {
      this.getPlayer();
    }
  }

  getPlayer(): void {
    this.playerService.getPlayer()
      .subscribe(player => this.player = player);
  }

  reset(): void {
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

}
