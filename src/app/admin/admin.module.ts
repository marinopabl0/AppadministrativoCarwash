import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { ProductFormComponent } from "./product/product-form/product-form.component";

import { ReactiveFormsModule } from "@angular/forms"; //esto no va a "material module"

import { MaterialModule } from "../material/material.module"; // material module

import { NavComponent } from "./components/nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { HomeComponent } from "./components/home/home.component";
import { ProductsListComponent } from "./product/products-list/products-list.component";
import { ProductoFormularioComponent } from './product/producto-formulario/producto-formulario.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoryListComponent } from "./category/category-list/category-list.component";
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { TypeVehicleListComponent } from './type-vehicle/type-vehicle-list/type-vehicle-list.component';
import { TypeVehicleFormComponent } from "./type-vehicle/type-vehicle-form/type-vehicle-form.component"; 
import { TypeVehicleEditComponent } from "./type-vehicle/type-vehicle-edit/type-vehicle-edit.component"; 
import { ServiceListComponent } from "./service/service-list/service-list.component"; 
import { ServiceFormComponent } from "./service/service-form/service-form.component"; 
import { ServiceEditComponent } from "./service/service-edit/service-edit.component"; 
import { PlanListComponent } from "./plan/plan-list/plan-list.component"; 
import { PlanFormComponent } from "./plan/plan-form/plan-form.component"; 
import { PlanEditComponent } from "./plan/plan-edit/plan-edit.component"; 

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    HomeComponent,
    ProductsListComponent,
    ProductoFormularioComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CategoryEditComponent,
    TypeVehicleListComponent,
    TypeVehicleFormComponent,
    TypeVehicleEditComponent,
    ServiceListComponent,
    ServiceFormComponent,
    ServiceEditComponent,
    PlanListComponent,
    PlanFormComponent,
    PlanEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ]
})
export class AdminModule {}
