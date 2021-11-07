import { Injectable } from "@angular/core";
import { IProduct } from "../../../interfaces/product.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

// sentry
import * as Sentry from "@sentry/browser";

import { throwError } from "rxjs"; // Para crear errores
import { catchError, retry } from "rxjs/operators"; // capturar errores
import { HttpErrorResponse } from "@angular/common/http"; // Para capturar errores de Http

@Injectable({
  providedIn: "root"
})
export class ProductsService {

  constructor(public http: HttpClient) {}

  getAllProducts() {
    // return this.products;
    return this.http.get<IProduct[]>(`${environment.url_api}/products`).pipe(
      retry(3), // Despues de 3 intentos ejecutará un error
      catchError(this.handleError)
    );
  }

  getAllCategories(){
    return this.http.get<any[]>(`${environment.url_api_carwash}/categorias`).pipe(
      retry(3), // Despues de 3 intentos ejecutará un error
      catchError(this.handleError)
    );
  }

  getProduct(id: string) {
    /* return this.products.find(item => {
      return id === item.id;
    }); */
    return this.http
      .get<IProduct>(`${environment.url_api}/products/${id}`)
      .pipe(
        retry(3), // Despues de 3 intentos ejecutará un error
        catchError(this.handleError)
      );
  }

  createProduct(product: IProduct) {
    return this.http.post(`${environment.url_api}/products`, product).pipe(
      retry(3), // Despues de 3 intentos ejecutará un error
      catchError(this.handleError)
    );
  }

  updateProduct(id: string, changes: Partial<IProduct>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes).pipe(
      retry(3), // Despues de 3 intentos ejecutará un error
      catchError(this.handleError)
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`).pipe(
      retry(3), // Despues de 3 intentos ejecutará un error
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    Sentry.captureException(error);
    return throwError("ups algo salio mal");
  }

  // Obtener archivo pdf | excel
  getFile() {
    return this.http.get("assets/files/listaPerson.txt", {
      responseType: "text"
    });
  }
}
