import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { IProduct } from "src/app/interfaces/product.model";
import { ProductsService } from "../../../core/services/products/products.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); // Crear un evento
  id: string;
  product$: Observable<IProduct>;
  // product: IProduct;
  today = new Date();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  /* addCart() {
    console.log("Añadido al carrito");
    this.productClicked.emit(this.product.id);
  } */

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      // usando switchMap para solucionar el doble subscribe
      switchMap((params: Params) => {
        return this.productService.getProduct(params.id);
      })
    );
    /* .subscribe((product) => {
      this.product = product;
    }); */
  }

  /* fetchProduct(id: string) {
    this.productService
      .getProduct(id) // recibimos un observable así que hay que suscribir
      .subscribe(product => {
        this.product = product;
      });
  } */

  createProduct() {
    const newProduct: IProduct = {
      id: "234",
      title: "nuevo productou",
      image: "assets/images/banner-1.jpg",
      price: 567,
      description: "Este es la descripcion del producto"
    };
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<IProduct> = {
      price: 555,
      description: "actualizando product"
    };
    this.productService
      .updateProduct("67", updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productService.deleteProduct("67").subscribe(message => {
      console.log(message);
    });
  }
}
