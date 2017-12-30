import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { NewPollComponent } from "../poll-new/poll-new.component";
import { PollHomeComponent } from "../poll-home/poll-home.component";
import { PollMainComponent } from "../poll-main/poll-main.component";
import { NotFoundComponent } from "../404/404.component";
import { PollMineComponent } from "../polls-mine/poll-mine.component";
import { LoginComponent } from "../login/login-component";
import { AuthGuard } from '../services/';

const appRoutes: Routes = [
  { path: "", pathMatch: "full", component: PollHomeComponent },
  { path: "newpoll", pathMatch: "full", component: NewPollComponent, canActivate: [AuthGuard] },
  { path: "poll/:id", pathMatch: "full", component: PollMainComponent, canActivate: [AuthGuard] },
  { path: "mypolls", pathMatch: "full", component: PollMineComponent, canActivate: [AuthGuard] },
  { path: "mypolls/poll/:id", pathMatch: "full", component: PollMainComponent, canActivate: [AuthGuard]},
  { path: "login", pathMatch: "full", component: LoginComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
