import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../../../core/services/products/products.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { myValidators } from "../../../utils/validators"; // nuestr custom validator

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  formulario: FormGroup;
  id: string;

  // inyección de dependencias
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    //Obtener el parametro id
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      // llamar a mi servicio de producto
      this.productsService.getProduct(this.id).subscribe(product => {
        this.formulario.patchValue(product); // Pasar el valor a cada propiedad del objeto producto, e imprimirlo en el UI
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      const product = this.formulario.value;
      this.productsService
        .updateProduct(this.id, product)
        .subscribe(createdproduct => {
          console.log(createdproduct);
          this.router.navigate(["./admin/products"]);
        });
    }
    //console.log(this.formulario.value);
  }

  // Este medotod podemos llamar en el constructor o en ngOnInit
  private buildForm() {
    this.formulario = this.formBuilder.group({
      // id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      price: ["", [Validators.required, myValidators.isPriceValid]],
      image: [""],
      description: ["", [Validators.required]]
    });
  }

  // Esto podría utilizawr en el html al llamar --> formulario.get('price').errors   -->  priceField.errors
  get priceField() {
    return this.formulario.get("price");
  }
}
