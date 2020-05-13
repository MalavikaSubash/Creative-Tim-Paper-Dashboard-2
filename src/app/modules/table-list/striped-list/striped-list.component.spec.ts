import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedListComponent } from './striped-list.component';

describe('StripedListComponent', () => {
  let component: StripedListComponent;
  let fixture: ComponentFixture<StripedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StripedListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
