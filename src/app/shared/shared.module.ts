import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { ExponentialPipe } from "./pipes/exponential/exponential.pipe";
import { HighlightDirective } from "./directives/highlight/highlight.directive";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

// angular material
import { MaterialModule } from "../material/material.module";
import { DeleteRepeatsPipe } from "./pipes/deleteRepeats/delete-repeats.pipe";


@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    DeleteRepeatsPipe,
  ],
  //hay que exportarlo, para que pueden ser utilizados en otros componentes
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    DeleteRepeatsPipe,

  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule]
})
export class SharedModule {}
