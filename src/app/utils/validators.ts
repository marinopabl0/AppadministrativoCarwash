// Nuestro custom validator
import { AbstractControl } from "@angular/forms";

export class myValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value; // Obtener el valor que vamos a validar
    if (value > 10000) {
      return { price_invalid: true }; // retornamos invalid true
    }
    return null; // retornamos valid true
  }
}
