import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from '../models/';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PollService {

  constructor(public http: HttpClient){

  }
  // Create a new poll
  public postPoll(poll: Poll){
  return this.http.post('poll/post', poll);
  }

  // Update a poll
  public putPoll(poll: Poll){
    return this.http.put(`poll/put/:${poll._id}`, poll);
  }

  // Delete a poll
  public deletePoll(id: string){
    return this.http.delete(`poll/delete/:${id}`);
  }

  // Get ALL polls
  public getAllPolls(){
    return this.http.get('poll/getAll');
  }

  //Get a single poll
  public getPoll(id: string){
    return this.http.get(`poll/get/${id}`);
  }

  public getPollsByUsername(username: string){
    return this.http.get(`poll/get/byuser/${username}`);
  }
}
