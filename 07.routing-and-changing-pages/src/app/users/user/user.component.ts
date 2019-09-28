import { ActivatedRoute, Router, Params } from "@angular/router";
import { UsersService } from "./../../services/users.service";
import { Component, OnInit } from "@angular/core";
import { User } from "./../../classes/user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.user = this.userService.getUserById(id);

    this.route.params.subscribe((params: Params) => {
      this.user = new User(+params["id"], params["name"]);
    });
  }
}
