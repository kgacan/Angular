import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { ServerService } from "./servers.service";
import { Server } from "../classes/server";

@Injectable({
  providedIn: "root"
})
export class ServerResolverService implements Resolve<Server> {
  constructor(private serverService: ServerService) {}

  resolve(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ): Server | import("rxjs").Observable<Server> | Promise<Server> {
    return this.serverService.getServerById(+route.params["id"]);
  }
}
