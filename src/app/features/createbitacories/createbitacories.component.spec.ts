import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebitacoriesComponent } from './createbitacories.component';

describe('CreatebitacoriesComponent', () => {
  let component: CreatebitacoriesComponent;
  let fixture: ComponentFixture<CreatebitacoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebitacoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebitacoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
