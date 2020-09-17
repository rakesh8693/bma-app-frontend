import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor() { }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLoggedIn()) {
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('userName');
    return !(user === null);
  }
}
