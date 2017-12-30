import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(public http: HttpClient, public router: Router) {
    if (!localStorage.getItem("username")) {
      this.logOut();
    }
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem("username").length > 0;
  }

  public logOut(): void {
    localStorage.setItem("username", "");
  }

  public login(username: string) {
    localStorage.setItem("username", username);
    this.router.navigate([""]);
  }

  public getUsername(): string {
    return localStorage.getItem("username");
  }
}
