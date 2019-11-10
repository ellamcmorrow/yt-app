import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { Video } from "../models/video";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  public url =
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY&channelId=UCcyq283he07B7_KUX07mmtA&order=date&part=snippet &type=video,id&maxResults=10";
  private dataStream = new Subject<any>();
  VideoState = this.dataStream.asObservable();
  constructor(public http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(data => {
        return this.dataStream.next(data);
      })
    );
  }
}
