import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  campoValido: Boolean = true;

  constructor() {
    this.emailField = new FormControl("", [Validators.email]);
    // patron observable, cada vez que haya un cambie, escucho los cambios
    /* this.emailField.valueChanges.subscribe(value => {
      console.log(value);
    }); */
  }

  ngOnInit(): void {}

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
      this.campoValido = true;
    } else {
      this.campoValido = false;
    }
    // console.log("se hizo click");
  }
}
