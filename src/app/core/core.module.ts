import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsService } from "./services/products/products.service";
import { CarwashService } from "./services/carwash/carwash.service"; 

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // importando el servicio
    ProductsService,
    CarwashService
  ]
})
export class CoreModule {}
