import { Injectable } from "@angular/core";
import { User } from "../classes/user";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: User[] = [
    new User(1, "Kemal"),
    new User(2, "Samir"),
    new User(3, "Emir")
  ];

  constructor() {}

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find(u => {
      return u.id === id;
    });

    return user;
  }
}
