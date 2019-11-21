import { Component, OnInit, Input } from '@angular/core';
import { Business } from 'src/app/model/business';

import { Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-run-business',
  templateUrl: './run-business.component.html',
  styleUrls: ['./run-business.component.css']
})
export class RunBusinessComponent implements OnInit {
  @Input() business: Business;
  public progress: number;
  public isRunning: boolean;

  constructor() { }

  ngOnInit() {
    this.progress = 0;
    this.isRunning = false;
  }

  runBusiness(): void {
    // timer
    const source = timer(3, 1000);
    // output: 0
    const subscribe = source.subscribe(val => console.log(val));
  }

}
