import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PollHomeComponent } from '../poll-home/poll-home.component';
import { PollMainComponent } from '../poll-main/poll-main.component';
import { NewPollComponent } from '../poll-new/poll-new.component';
import { PollMineComponent } from '../polls-mine/poll-mine.component';
import { NotFoundComponent } from '../404/404.component';
import { LoginComponent } from '../login/login-component';

import { AppRoutingModule } from './app.routing.module';

import { PollService, AuthService, AuthGuard } from '../services';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    PollHomeComponent,
    PollMainComponent,
    NewPollComponent,
    PollMineComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PollService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
