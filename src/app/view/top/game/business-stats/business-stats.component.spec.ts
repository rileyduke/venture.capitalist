import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStatsComponent } from './business-stats.component';

describe('BusinessStatsComponent', () => {
  let component: BusinessStatsComponent;
  let fixture: ComponentFixture<BusinessStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
