import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductsListComponent } from "./product/products-list/products-list.component";
import { ProductoFormularioComponent } from "./product/producto-formulario/producto-formulario.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { CategoryListComponent } from "./category/category-list/category-list.component";
import { CategoryFormComponent } from "./category/category-form/category-form.component";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { TypeVehicleListComponent } from "./type-vehicle/type-vehicle-list/type-vehicle-list.component"; 
import { TypeVehicleFormComponent } from "./type-vehicle/type-vehicle-form/type-vehicle-form.component"; 
import { TypeVehicleEditComponent } from "./type-vehicle/type-vehicle-edit/type-vehicle-edit.component"; 
import { ServiceListComponent } from "./service/service-list/service-list.component"; 
import { ServiceFormComponent } from "./service/service-form/service-form.component"; 
import { ServiceEditComponent } from "./service/service-edit/service-edit.component"; 
import { PlanListComponent } from "./plan/plan-list/plan-list.component"; 
import { PlanFormComponent } from "./plan/plan-form/plan-form.component"; 
import { PlanEditComponent } from "./plan/plan-edit/plan-edit.component"; 

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      // vista anidada
      /* {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }, */
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },

      {
        path: "product/create",
        component: ProductoFormularioComponent
      },
      {
        path: "product/edit/:id",
        component: ProductEditComponent
      },
      {
        path: "products",
        component: ProductsListComponent
      },
      {
        path: "categories",
        component: CategoryListComponent
      },
      {
        path: "category/create",
        component: CategoryFormComponent
      },
      {
        path: "category/edit/:id",
        component: CategoryEditComponent
      },
      {
        path: "typevehicles",
        component: TypeVehicleListComponent
      },
      {
        path: "typevehicle/create",
        component: TypeVehicleFormComponent
      },
      {
        path: "typevehicle/edit/:id",
        component: TypeVehicleEditComponent
      },
      {
        path: "services",
        component: ServiceListComponent
      },
      {
        path: "service/create",
        component: ServiceFormComponent
      },
      {
        path: "service/edit/:id",
        component: ServiceEditComponent
      },
      {
        path: "plans",
        component: PlanListComponent
      },
      {
        path: "plan/create",
        component: PlanFormComponent
      },
      {
        path: "plan/edit/:id",
        component: PlanEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
