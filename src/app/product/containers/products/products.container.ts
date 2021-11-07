import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../../interfaces/product.model";
import { ProductsService } from "../../../core/services/products/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.container.html",
  styleUrls: ["./products.container.scss"]
})
export class ProductsContainer implements OnInit {
  title: string = "Servicios";
  products: IProduct[] = [];
  city: string;

  constructor(
    private productsService: ProductsService, 
    ) {}


  clickProduct(id: number) {
    console.log(id);
  }

  ngOnInit(): void {
    //this.fetchProducts();
  }

  //fns
  fetchProducts(){
    this.productsService.getAllProducts().subscribe(dataResult => {
      this.products = dataResult;
      console.log(dataResult);
    });
  }

}
