import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourUpcomingEventsComponent } from './four-upcoming-events.component';

describe('FourUpcomingEventsComponent', () => {
  let component: FourUpcomingEventsComponent;
  let fixture: ComponentFixture<FourUpcomingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourUpcomingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
