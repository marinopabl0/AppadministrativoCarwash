import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { myValidators } from "../../../utils/validators";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";


@Component({
  selector: "app-service-form",
  templateUrl: "./service-form.component.html",
  styleUrls: ["./service-form.component.scss"]
})
export class ServiceFormComponent implements OnInit {
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
      this.svCarwash.post(dataSend,'servicios').subscribe(dataResult => {
        this.router.navigate(["./admin/services"]);
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
