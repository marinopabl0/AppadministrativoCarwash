import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    // Para que otros modulos lo puedan usar
    RouterModule
  ]
})
export class ContactRoutingModule {}
