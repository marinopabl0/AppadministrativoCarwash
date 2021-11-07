import { NgModule } from "@angular/core";
// PreloadAllModules    ---> Modulo para la estrategia de precarga de archivos
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

import { AdminGuard } from "./guards/admin.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // VISTAS ANIDADAS
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        // Importa dinamicamente el modulo de home
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "products",
        loadChildren: () =>
          import("./product/product.module").then(m => m.ProductModule)
      },
      /* {
        path: "product/:id",
        component: ProductDetailComponent
      }, */
      {
        path: "contact",
        loadChildren: () =>
          import("./contact/contact.module").then(m => m.ContactModule)
      }
    ]
  },
  {
    path: "admin",
    canActivate: [AdminGuard], // El guardian va a validar los datos
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        m => m.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [
    // preloadingStrategy: PreloadAllModules ---> Es una estrategia de precarga de archivos
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
