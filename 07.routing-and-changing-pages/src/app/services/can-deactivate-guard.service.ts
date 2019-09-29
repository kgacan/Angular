import { ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CanDeactivate, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: "root"
})
export class CanDeactivateGuardService
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return component.canDeactivate();
  }

  // canDeactivate(
  //   component: CanComponentDeactivate,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot
  // ): boolean | Observable<boolean> | Promise<boolean> {
  //   return component.canDeactivate();
  // }
}
