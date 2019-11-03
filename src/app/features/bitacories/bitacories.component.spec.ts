import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoriesComponent } from './bitacories.component';

describe('BitacoriesComponent', () => {
  let component: BitacoriesComponent;
  let fixture: ComponentFixture<BitacoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
