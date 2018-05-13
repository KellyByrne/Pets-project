import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePetComponent } from './one-pet.component';

describe('OnePetComponent', () => {
  let component: OnePetComponent;
  let fixture: ComponentFixture<OnePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
