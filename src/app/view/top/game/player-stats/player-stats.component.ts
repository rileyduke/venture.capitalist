import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})

// simple display player component
export class PlayerStatsComponent implements OnInit {
  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
