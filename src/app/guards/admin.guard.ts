import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AuthService } from "../core/services/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // En base a la ruta va a devolver un observable
  // EJ: Si el inicio de sesion tiene un rol de tipo administrador, entonces lo dejo acceder
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* ---  extraer el valor ya sea true o false, convertiendo a tipo buleano con map() --- */
    return this.authService.hasUser().pipe(
      map(user => {
        if (user === null) {
          this.router.navigate(["/auth/login"]);
        }
        return user === null ? false : true;
      }) //Es aquí donde se mando un false o true para el acceso a la ruta
    );
  }
}
