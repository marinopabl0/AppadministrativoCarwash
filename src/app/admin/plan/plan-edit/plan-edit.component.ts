import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { myValidators } from "../../../utils/validators"; // nuestr custom validator
import { CarwashService } from "src/app/core/services/carwash/carwash.service";

@Component({
  selector: "app-plan-edit",
  templateUrl: "./plan-edit.component.html",
  styleUrls: ["./plan-edit.component.scss"]
})
export class PlanEditComponent implements OnInit {
  formulario: FormGroup;
  id: string;

  public categories: any[] = [];
  public typevehicles: any[] = [];
  public services: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private svCarwash: CarwashService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.svCarwash.get(this.id, 'planes').subscribe(dataResult => {
        this.formulario.patchValue(dataResult);
      });
    });

    //Categorias
    this.fetchCategories();
    //Tipo Vehiculos
    this.fetchTypeVehicles()
    // Servicios
    this.fetchServices();
  }

  editItem(event: Event) {
    event.preventDefault();

    if (this.formulario.valid) {
      const dataSend = this.formulario.value;
      this.svCarwash.update(this.id, dataSend, 'planes').subscribe(dataResult => {
          this.router.navigate(["./admin/plans"]);
        });
    }
    //console.log(this.formulario.value);
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
