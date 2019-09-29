import { AuthService } from "./../services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLoadServer() {
    //complex code
    this.router.navigate(["/servers", "1", "edit"], {
      queryParams: { allowEdit: 1 },
      fragment: "loading"
    });
  }

  onLogin() {
    this.authService.logIn();
  }
  onLogout() {
    this.authService.logOut();
  }
}
