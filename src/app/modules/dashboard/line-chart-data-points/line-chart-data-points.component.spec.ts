import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDataPointsComponent } from './line-chart-data-points.component';

describe('LineChartDataPointsComponent', () => {
  let component: LineChartDataPointsComponent;
  let fixture: ComponentFixture<LineChartDataPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartDataPointsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartDataPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
