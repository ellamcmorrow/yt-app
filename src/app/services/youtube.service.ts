import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { Video } from "../models/video";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private dataStream = new Subject<any>();
  dataStream$ = this.dataStream.asObservable();



  apiKey: string = "AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY";

  constructor(public http: HttpClient) {}

  //creating an observable data source that can be suscribed to
  getVideos(channel, maxResults){
    let videoUrlSource =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      this.apiKey +
      "&channelId=" +
      channel +
      "&order=date&part=snippet &type=video,id&maxResults=" +
      maxResults;
      this.http.get(videoUrlSource).subscribe(response => {
        this.dataStream.next(videoUrlSource);
    });
 
  }
}

  
