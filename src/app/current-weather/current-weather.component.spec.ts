import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWatherComponent } from './current-weather.component';

describe('CurrentWatherComponent', () => {
  let component: CurrentWatherComponent;
  let fixture: ComponentFixture<CurrentWatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
