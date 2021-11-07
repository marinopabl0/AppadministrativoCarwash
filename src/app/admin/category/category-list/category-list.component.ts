import { Component, OnInit } from "@angular/core";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";
//import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"]
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = [ "descripcion", "actions"];
  public categories: any[] = [];

  constructor(private carwashsv: CarwashService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.carwashsv.getAll('categorias').subscribe(dataResult => {
      this.categories = dataResult;
    });
  }

  deleteItem(id: string) {
    this.carwashsv.delete(id, 'categorias').subscribe(message => {
      // Borrar tambien en el UI, al realizar la eliminación en la DB
      if (message) {
        const index = this.categories.findIndex(item => item._id === id);
        this.categories.splice(index, 1);
        this.categories = [...this.categories];
      }
      // para recargar automaticamente la lista de productos, al eliminar
      // this.fetchProducts();
    });
  }
}
