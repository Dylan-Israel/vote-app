import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'vote-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{
  public isUserLoggedIn: boolean;
  public username: string;

  constructor(public authService: AuthService){
    this.isUserLoggedIn = this.authService.isLoggedIn();

    if(this.isUserLoggedIn){
      this.username = this.authService.getUsername();
    }
  }

  public logOut(): void {
    this.authService.logOut();
    this.isUserLoggedIn = this.authService.isLoggedIn();
  }
}
