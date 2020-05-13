import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsCardComponent } from './errors-card.component';

describe('ErrorsCardComponent', () => {
  let component: ErrorsCardComponent;
  let fixture: ComponentFixture<ErrorsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
