import { ActivatedRoute, Router } from "@angular/router";
import { ServerService } from "./../../services/servers.service";
import { Server } from "../../classes/server";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  server: Server;
  serverName: string;
  serverStatus: string;

  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.serverService.getServerById(id);
  }
}
