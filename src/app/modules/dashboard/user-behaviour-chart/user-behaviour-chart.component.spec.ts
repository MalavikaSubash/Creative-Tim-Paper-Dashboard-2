import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBehaviourChartComponent } from './user-behaviour-chart.component';

describe('UserBehaviourChartComponent', () => {
  let component: UserBehaviourChartComponent;
  let fixture: ComponentFixture<UserBehaviourChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserBehaviourChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBehaviourChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
