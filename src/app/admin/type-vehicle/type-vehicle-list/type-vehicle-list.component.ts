import { Component, OnInit } from "@angular/core";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";
//import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: "app-type-vehicle-list",
  templateUrl: "./type-vehicle-list.component.html",
  styleUrls: ["./type-vehicle-list.component.scss"]
})
export class TypeVehicleListComponent implements OnInit {
  displayedColumns: string[] = [ "descripcion", "actions"];
  public typevehicles: any[] = [];

  constructor(private carwashsv: CarwashService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.carwashsv.getAll('tipovehiculos').subscribe(dataResult => {
      this.typevehicles = dataResult;
    });
  }

  deleteItem(id: string) {
    this.carwashsv.delete(id, 'tipovehiculos').subscribe(message => {
      // Borrar tambien en el UI, al realizar la eliminación en la DB
      if (message) {
        const index = this.typevehicles.findIndex(item => item._id === id);
        this.typevehicles.splice(index, 1);
        this.typevehicles = [...this.typevehicles];
      }
      // para recargar automaticamente la lista de productos, al eliminar
      // this.fetchProducts();
    });
  }
}
