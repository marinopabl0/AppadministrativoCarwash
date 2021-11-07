import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { myValidators } from "../../../utils/validators";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";


@Component({
  selector: "app-plan-form",
  templateUrl: "./plan-form.component.html",
  styleUrls: ["./plan-form.component.scss"]
})
export class PlanFormComponent implements OnInit {
  formulario: FormGroup;

  public categories: any[] = [];
  public typevehicles: any[] = [];
  public services: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private svCarwash: CarwashService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {

    //Categorias
    this.fetchCategories();
    //Tipo Vehiculos
    this.fetchTypeVehicles()
    // Servicios
    this.fetchServices();
  }

  saveItem(event: Event) {
    event.preventDefault();

    if (this.formulario.valid) {
      const dataSend = this.formulario.value;
      this.svCarwash.post(dataSend,'planes').subscribe(dataResult => {
        this.router.navigate(["./admin/plans"]);
      });
    }
  }

  // Este medotod podemos llamar en el constructor o en ngOnInit
  private buildForm() {
    this.formulario = this.formBuilder.group({
      descripcion: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      categoriaid: ["", [Validators.required]],
      tipovehiculoid: ["", [Validators.required]],
      serviceid: ["", [Validators.required]],
    });
  }

  fetchCategories() {
    this.svCarwash.getAll('categorias').subscribe(dataResult => {
      this.categories = dataResult;
    });
  }

  fetchTypeVehicles() {
    this.svCarwash.getAll('tipovehiculos').subscribe(dataResult => {
      this.typevehicles = dataResult;
    });
  }

  fetchServices() {
    this.svCarwash.getAll('servicios').subscribe(dataResult => {
      this.services = dataResult;
    });
  }

}
