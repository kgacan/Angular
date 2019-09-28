import { Component, OnInit } from "@angular/core";
import { Server } from "src/app/classes/server";
import { ServerService } from "./../../services/servers.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serverService: ServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // const id = +this.route.snapshot.params["id"];
    // this.server = this.serverService.getServerById(id);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServerById(+params["id"]);
    });
  }
}
