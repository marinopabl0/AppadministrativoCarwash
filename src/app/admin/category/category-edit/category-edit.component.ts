import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { myValidators } from "../../../utils/validators"; // nuestr custom validator
import { CarwashService } from "src/app/core/services/carwash/carwash.service";

@Component({
  selector: "app-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.scss"]
})
export class CategoryEditComponent implements OnInit {
  formulario: FormGroup;
  id: string;

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
      this.svCarwash.get(this.id, 'categorias').subscribe(dataResult => {
        this.formulario.patchValue(dataResult);
      });
    });
  }

  editItem(event: Event) {
    event.preventDefault();

    if (this.formulario.valid) {
      const dataSend = this.formulario.value;
      this.svCarwash.update(this.id, dataSend, 'categorias').subscribe(dataResult => {
          this.router.navigate(["./admin/categories"]);
        });
    }
    //console.log(this.formulario.value);
  }

  // Este medotod podemos llamar en el constructor o en ngOnInit
  private buildForm() {
    this.formulario = this.formBuilder.group({
      descripcion: ["", [Validators.required]]
    });
  }

}
