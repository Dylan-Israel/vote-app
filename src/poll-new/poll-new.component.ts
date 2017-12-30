import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Poll, Options } from "../models/";
import { PollService, AuthService } from '../services/';

@Component({
  selector: "poll-new",
  templateUrl: "./poll-new.component.html",
  styleUrls: ["./poll-new.component.scss"]
})
export class NewPollComponent {
  public newPoll: Poll;
  public newOption: string;

  constructor(
    public pollService: PollService,
    public authService: AuthService,
    public router: Router
  ) {
    this.newPoll = { pollId: null, question: "", options: [], createdBy: this.authService.getUsername() };
  }

  public addNewOption(): void {
    this.newPoll.options.push({name: this.newOption, userVotes: []});
    this.newOption = "";
  }

  public removeNewOption(index: number) {
    this.newPoll.options.splice(index, 1);
  }

  public isSaveDisabled() {
    if (this.newPoll.question.length < 5) {
      return false;
    }
    else if(this.newPoll.options.length > 1) {
      return false;
    }
    else{
      return true;
    }
  }

  public postPoll() {
    this.pollService.postPoll(this.newPoll).subscribe((data) => {
      this.router.navigate(['']);
    });
  }
}
