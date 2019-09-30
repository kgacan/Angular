import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserSeviceService {
  activatedEmmiter = new Subject<boolean>();

  constructor() {}
}
