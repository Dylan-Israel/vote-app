import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PollService, AuthService } from "../services/";
import { Poll } from "../models/";
declare const google: any;

@Component({
  selector: "poll-main",
  templateUrl: "./poll-main.component.html",
  styleUrls: ["./poll-component.scss"]
})
export class PollMainComponent {
  public params: object;
  public poll: Poll;
  public vote: string = "";
  public myPoll: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public pollService: PollService,
    public authService: AuthService
  ) {
    this.route.params.subscribe(params => (this.params = params));
    const id = this.params["id"] || false;
    if (id) {
      this.pollService.getPoll(id).subscribe((data: Poll) => {
        this.poll = data;
        this.myPoll = this.poll.createdBy === this.authService.getUsername();
        this.loadChart();
      });
    } else {
      this.router.navigate([""]);
    }
  }

  public loadChart() {
    google.charts.load("current", { packages: ["corechart"] });
    let drawChart = () => {
      const data = google.visualization.arrayToDataTable(this.formatPollData());

      const options = {
        title: `Chart: ${this.poll.question}`,
        is3D: true
      };

      const chart = new google.visualization.PieChart(
        document.getElementById("piechart")
      );

      chart.draw(data, options);
    };
    google.charts.setOnLoadCallback(drawChart);
  }

  public formatPollData() {
    let formattedPollData = [["", ""]];

    this.poll.options.forEach((element: any) => {
      formattedPollData.push([element.name, element.userVotes.length]);
    });
    return formattedPollData;
  }

  public putPoll() {
    const index = this.poll.options.findIndex((element: any) => {
      return element.name === this.vote;
    });
    console.log(index);

    if (index !== -1) {
      // TODO get actual signed in user
      this.poll.options[index].userVotes.push("Temp User");
      console.log(this.poll);
      this.pollService.putPoll(this.poll).subscribe(data => {
        console.log(data);
      });
    }
  }
}
