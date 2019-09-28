import { Server } from "../classes/server";

import { Component, OnInit } from "@angular/core";

import { ServerService } from "./../services/servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.servers = this.serverService.getAllServers();
  }
}
