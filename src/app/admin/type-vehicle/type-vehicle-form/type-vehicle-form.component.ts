import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { myValidators } from "../../../utils/validators";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";


@Component({
  selector: "app-type-vehicle-form",
  templateUrl: "./type-vehicle-form.component.html",
  styleUrls: ["./type-vehicle-form.component.scss"]
})
export class TypeVehicleFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private svCarwash: CarwashService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveItem(event: Event) {
    event.preventDefault();

    if (this.formulario.valid) {
      const dataSend = this.formulario.value;
      this.svCarwash.post(dataSend,'tipovehiculos').subscribe(dataResult => {
        this.router.navigate(["./admin/typevehicles"]);
      });
    }
  }

  // Este medotod podemos llamar en el constructor o en ngOnInit
  private buildForm() {
    this.formulario = this.formBuilder.group({
      descripcion: ["", [Validators.required]]
    });
  }

}
