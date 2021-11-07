import { Component, OnInit } from "@angular/core";
import { CarwashService } from "src/app/core/services/carwash/carwash.service";
//import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: "app-plan-list",
  templateUrl: "./plan-list.component.html",
  styleUrls: ["./plan-list.component.scss"]
})
export class PlanListComponent implements OnInit {
  displayedColumns: string[] = [ "descripcion", "precio", "categoriaid", "tipovehiculoid", "actions"];
  public plans: any[] = [];
  public categories: any[] = [];
  public typevehicles: any[] = [];

  constructor(private carwashsv: CarwashService) {}

  ngOnInit(): void {
    //categorias
    this.fetchCategories();
    //typoVehiculos
    this.fetchTypeVehicles();
    //paquetes
    this.fetchPlans();
  }

  fetchPlans() {
    this.carwashsv.getAll('planes').subscribe(dataResult => {
      this.plans = dataResult;
    });
  }

  fetchCategories() {
    this.carwashsv.getAll('categorias').subscribe(dataResult => {
      this.categories = dataResult;
    });
  }

  fetchTypeVehicles() {
    this.carwashsv.getAll('tipovehiculos').subscribe(dataResult => {
      this.typevehicles = dataResult;
    });
  }

  deleteItem(id: string) {
    this.carwashsv.delete(id, 'planes').subscribe(message => {
      // Borrar tambien en el UI, al realizar la eliminación en la DB
      if (message) {
        const index = this.plans.findIndex(item => item._id === id);
        this.plans.splice(index, 1);
        this.plans = [...this.plans];
      }
      // para recargar automaticamente la lista de productos, al eliminar
      // this.fetchProducts();
    });
  }


  customFilter(Key: any, Value: any, Source: any) {
    return Source.filter(x => x[Key] == Value)[0];
  }
}
