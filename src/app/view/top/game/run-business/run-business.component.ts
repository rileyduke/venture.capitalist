import { Component, OnInit, Input } from '@angular/core';
import { Business } from 'src/app/model/business';
import { CONSTANTS } from 'src/app/model/constant';

import { Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-run-business',
  templateUrl: './run-business.component.html',
  styleUrls: ['./run-business.component.css']
})
export class RunBusinessComponent implements OnInit {
  @Input() business: Business
  public progress: number
  public progressPercent: number
  public isRunning: boolean

  // timer
  public source = timer(CONSTANTS.timerTick,CONSTANTS.timerTick);

  constructor() { }

  ngOnInit() {
    this.progress = CONSTANTS.progressMin
    this.isRunning = false
  }

  runBusiness(): void {
    if(!this.isRunning){
      this.progress = 0
      this.isRunning = true
      const subscribe = this.source.subscribe(val => {
        if(this.isRunning){
          this.progress += CONSTANTS.tickValue
          this.progressPercent = 100*(this.progress / CONSTANTS.progressMax)

          if(this.progress >= CONSTANTS.progressMax){
            this.isRunning = false
            this.progress = 0
            this.progressPercent = 0
          }
          
          console.log(this.progress)
        }

      });
    }
  }

}
