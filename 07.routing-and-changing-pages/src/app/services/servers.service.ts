import { Injectable } from "@angular/core";
import { Server } from "../classes/server";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  public servers: Server[] = [
    new Server(1, "ProductionServer", "offline"),
    new Server(2, "TestServer", "offline"),
    new Server(3, "DevServer", "offline")
  ];

  getAllServers() {
    return this.servers;
  }

  getServerById(id: number) {
    const ser = this.servers.find(s => {
      return s.id === id;
    });
    return ser;
  }
}
