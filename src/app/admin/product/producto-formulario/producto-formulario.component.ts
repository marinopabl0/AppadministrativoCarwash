import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../../../core/services/products/products.service";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { myValidators } from "../../../utils/validators"; // nuestr custom validator
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-producto-formulario",
  templateUrl: "./producto-formulario.component.html",
  styleUrls: ["./producto-formulario.component.scss"]
})
export class ProductoFormularioComponent implements OnInit {
  formulario: FormGroup;
  imageUrl$: Observable<any>; // Esto funciona sin el "Obervable"

  // inyección de dependencias
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      const product = this.formulario.value;
      this.productsService.createProduct(product).subscribe(createdproduct => {
        console.log(createdproduct);
        this.router.navigate(["./admin/products"]);
      });
    }
    //console.log(this.formulario.value);
  }

  // Este medotod podemos llamar en el constructor o en ngOnInit
  private buildForm() {
    this.formulario = this.formBuilder.group({
      id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      price: ["", [Validators.required, myValidators.isPriceValid]],
      image: [""],
      description: ["", [Validators.required]]
    });
  }

  // Subir imagen
  uploadFile(event) {
    event.preventDefault();
    const file = event.target.files[0]; // extrar imagen
    console.log(file.type);
    const nameRandom = new Date().getTime();
    const name = `${nameRandom}.${file.type.substring(6)}`; // Sera el directorio donde se va a almacenar las imagenes en firebase
    //console.log(name);
    const fileRef = this.angularFireStorage.ref(name); // Extraer las referencias del archivo
    const task = this.angularFireStorage.upload(name, file); // tarea de subir a firebase

    // el task va a ser un observable, xq no se sebe en que momento complete la subida
    // Nos devuelve un observable, asi puede usar un pipe de "finaliza"
    task
      .snapshotChanges() // Nos va a permitir saber cuando termina y cuando no
      .pipe(
        // Cuando finalice voy a tener la url del archivo
        finalize(() => {
          this.imageUrl$ = fileRef.getDownloadURL();
          // Asignar el nombre de la imagen al campo "image del formulario" para el envia a la db
          this.imageUrl$.subscribe(url => {
            this.formulario.get("image").setValue(url);
          });
        })
      )
      .subscribe(); // Finalmente voy a ser una suscripción para que se prcese
  }

  // Esto podría utilizawr en el html al llamar --> formulario.get('price').errors   -->  priceField.errors
  get priceField() {
    return this.formulario.get("price");
  }
}
