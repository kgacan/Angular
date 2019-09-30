import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserSeviceService } from "./user/user-sevice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  showText: boolean = false;
  activatedSub: Subscription;

  constructor(private userServeica: UserSeviceService) {}

  ngOnInit() {
    this.activatedSub = this.userServeica.activatedEmmiter.subscribe(data => {
      this.showText = data;
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
