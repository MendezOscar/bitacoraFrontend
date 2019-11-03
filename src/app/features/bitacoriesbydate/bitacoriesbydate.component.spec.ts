import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoriesbydateComponent } from './bitacoriesbydate.component';

describe('BitacoriesbydateComponent', () => {
  let component: BitacoriesbydateComponent;
  let fixture: ComponentFixture<BitacoriesbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoriesbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoriesbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
