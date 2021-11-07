import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsContainer } from "./containers/products/products.container";
import { ProductComponent } from "./components/product/product.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../shared/shared.module";

import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [ProductsContainer, ProductComponent, ProductDetailComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule, MaterialModule]
})
export class ProductModule {}
