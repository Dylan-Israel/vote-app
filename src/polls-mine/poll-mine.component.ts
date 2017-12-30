import { Component } from '@angular/core';
import { Poll } from '../models/';
import { PollService, AuthService } from '../services/';

@Component({
  selector: 'poll-mine',
  templateUrl: './poll-mine.component.html',
  styleUrls: ['./poll-mine.component.scss']
})
export class PollMineComponent{
  public myPolls: any;

  constructor(public pollService: PollService, public authService: AuthService) {

    this.pollService.getPollsByUsername(this.authService.getUsername()).subscribe((data) => {
      this.myPolls = data;
    });
  }
}
