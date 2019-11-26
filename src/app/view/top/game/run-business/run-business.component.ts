import { Component, OnInit, Input } from '@angular/core';
import { Business } from 'src/app/model/business';
import { CONSTANTS } from 'src/app/model/constant';
import * as Feather from 'feather-icons';

import { Observable, of, timer } from 'rxjs';
import { Player } from 'src/app/model/player';
import { HelperService } from 'src/app/helper/helper.service';

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

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    if (this.business.isManaged || this.business.isRunning) {
      this.business.isRunning = true
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
  }

  // business castbar
  // runs the business and scores it once it meets its desired castpoint
  runBusiness(): void {
    if (!this.business.isRunning) {
      this.business.lastStarted = Date.now()
      this.business.lastScored = Date.now()
      this.business.storeBusiness()
      this.business.isRunning = true
    }
  }

  buyBusiness(): void {
    // purchase the business with this player
    this.business.purchaseBusiness(this.player)
  }

  buyBusinessManager(): void {
    this.business.puchaseManager(this.player)
    this.runBusiness()
  }

}
