import { Component, OnInit } from "@angular/core";

import { UsersService } from "./../services/users.service";
import { User } from "../classes/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }
}
