import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehicleFormComponent } from './type-vehicle-form.component';

describe('TypeVehicleFormComponent', () => {
  let component: TypeVehicleFormComponent;
  let fixture: ComponentFixture<TypeVehicleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVehicleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
