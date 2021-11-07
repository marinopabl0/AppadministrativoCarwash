import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsContainer } from "./containers/products/products.container";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsContainer
  },
  {
    path: ":id",
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    // Para que otros modulos lo puedan usar
    RouterModule
  ]
})
export class ProductRoutingModule {}
