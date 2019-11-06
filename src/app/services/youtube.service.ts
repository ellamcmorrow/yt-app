import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable} from "rxjs";
import { Video } from "../models/video";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  apiKey: string = "AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY";

  constructor(public http: HttpClient) {}

  //creating an observable data source that can be suscribed to
  getVideos(channel, maxResults): Observable<Video[]> {
    let url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      this.apiKey +
      "&channelId=" +
      channel +
      "&order=date&part=snippet &type=video,id&maxResults=" +
      maxResults;
    return this.http.get<Video[]>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}
