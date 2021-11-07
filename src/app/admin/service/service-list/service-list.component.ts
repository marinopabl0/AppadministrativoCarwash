import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../../interfaces/product.model";
import { ProductsService } from "../../../core/services/products/products.service";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";
//import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.scss"]
})
export class ServiceListComponent implements OnInit {
  displayedColumns: string[] = [ "descripcion", "actions"];
  public services: any[] = [];

  constructor(private carwashsv: CarwashService) {}

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices() {
    this.carwashsv.getAll('servicios').subscribe(dataResult => {
      this.services = dataResult;
    });
  }

  deleteItem(id: string) {
    this.carwashsv.delete(id, 'servicios').subscribe(message => {
      // Borrar tambien en el UI, al realizar la eliminación en la DB
      if (message) {
        const index = this.services.findIndex(item => item._id === id);
        this.services.splice(index, 1);
        this.services = [...this.services];
      }
      // para recargar automaticamente la lista de productos, al eliminar
      // this.fetchProducts();
    });
  }
}
