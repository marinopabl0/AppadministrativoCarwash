import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehicleEditComponent } from './type-vehicle-edit.component';

describe('TypeVehicleEditComponent', () => {
  let component: TypeVehicleEditComponent;
  let fixture: ComponentFixture<TypeVehicleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVehicleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
