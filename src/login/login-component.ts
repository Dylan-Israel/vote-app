import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "login",
  templateUrl: "./login-component.html",
  styleUrls: ["./login-component.scss"]
})
export class LoginComponent {
  public isLoggedIn: boolean;
  public username: string;

  constructor(public router: Router, public authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.router.navigate([""]);
    }
  }

  public login(): void {
    this.authService.login(this.username);
  }

}
