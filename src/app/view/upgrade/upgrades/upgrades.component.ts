import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/data/player/player.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    this.playerService.getPlayer()
      .subscribe(player => this.player = player);
  }

}
