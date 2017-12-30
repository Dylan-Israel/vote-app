import { Component } from "@angular/core";
import { Poll } from "../models/";
import { PollService } from '../services/';

@Component({
  selector: "poll-home",
  templateUrl: "./poll-note.component.html",
  styleUrls: ["./poll-home.component.scss"]
})
export class PollHomeComponent {
  public allPolls: Poll[];

  constructor(public pollService: PollService) {
    this.pollService.getAllPolls().subscribe((data: Poll[]) =>{
    this.allPolls = data;
    });
  }
}
