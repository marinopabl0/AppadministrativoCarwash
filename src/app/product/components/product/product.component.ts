import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { IProduct } from "../../../interfaces/product.model";


@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})


export class ProductComponent implements OnInit {
  @Input() product: IProduct; // Estará recibiendo un objeto product desde un ngFor
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); // Crear un evento
  today = new Date();

  constructor() {}


  ngOnInit(): void {}
}
