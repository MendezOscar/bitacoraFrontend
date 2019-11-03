import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbitacoriesComponent } from './editbitacories.component';

describe('EditbitacoriesComponent', () => {
  let component: EditbitacoriesComponent;
  let fixture: ComponentFixture<EditbitacoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbitacoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbitacoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
