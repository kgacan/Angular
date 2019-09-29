import { ActivatedRoute, Router } from "@angular/router";
import { ServerService } from "./../../services/servers.service";
import { Server } from "../../classes/server";
import { Component, OnInit } from "@angular/core";
import { CanDeactivateGuardService } from "src/app/services/can-deactivate-guard.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit, CanDeactivateGuardService {
  server: Server;
  serverName: string;
  serverStatus: string;
  savedChanges = false;

  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.serverService.getServerById(id);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.server.name = this.serverName;
    this.server.status = this.serverStatus;
    this.serverService.updateServer(this.server);
    this.savedChanges = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  canDeactivate(
    component: import("../../services/can-deactivate-guard.service").CanComponentDeactivate,
    currentRoute: import("@angular/router").ActivatedRouteSnapshot,
    currentState: import("@angular/router").RouterStateSnapshot,
    nextState?: import("@angular/router").RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.savedChanges
    ) {
      return confirm("Do you want to discard a changes?");
    } else {
      return true;
    }
  }
}
