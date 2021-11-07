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
export class CarwashService {

  constructor(public http: HttpClient) {}

  getAll(endpoint:string){
    return this.http.get<any[]>(`${environment.url_api_carwash}/api/${endpoint}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  post(data: any, endpoint:string) {
    return this.http.post(`${environment.url_api_carwash}/api/${endpoint}`, data).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  get(id: string,endpoint:string) {
    return this.http.get<any>(`${environment.url_api_carwash}/api/${endpoint}/${id}`).pipe( 
        retry(3),
        catchError(this.handleError)
      );
  }

  update(id: string, changes: Partial<any>, endpoint:string) {
    return this.http.put(`${environment.url_api_carwash}/api/${endpoint}/${id}`, changes).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  delete(id: string, endpoint:string) {
    return this.http.delete(`${environment.url_api_carwash}/api/${endpoint}/${id}`).pipe(
      retry(3),
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
