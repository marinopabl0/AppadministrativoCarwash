import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../../interfaces/product.model";
import { ProductsService } from "../../../core/services/products/products.service";
//import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  displayedColumns: string[] = ["id", "title", "price", "actions"];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(message => {
      console.log(message);

      // Borrar tambien en el UI, al realizar la eliminación en la DB
      if (message) {
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
      // para recargar automaticamente la lista de productos, al eliminar
      // this.fetchProducts();
    });
  }
}
