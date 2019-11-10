import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { Video } from "../models/video";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private subject = new Subject<any>();
  dataStream$ = this.subject.asObservable();
  public videoUrlSource;

  apiKey: string = "AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY";

  constructor(public http: HttpClient) {}

  //creating an observable data source that can be suscribed to
  getVideos(channel, maxResults): Observable<any> {
    this.videoUrlSource =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      this.apiKey +
      "&channelId=" +
      channel +
      "&order=date&part=snippet &type=video,id&maxResults=" +
      maxResults;
    this.http.get(this.videoUrlSource).subscribe(data => {
      this.subject.next(data);
    });
  }
}
