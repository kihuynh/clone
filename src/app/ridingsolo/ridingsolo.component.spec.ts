import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingsoloComponent } from './ridingsolo.component';

describe('RidingsoloComponent', () => {
  let component: RidingsoloComponent;
  let fixture: ComponentFixture<RidingsoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidingsoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingsoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
