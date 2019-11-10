import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-video-details",
  templateUrl: "./video-details.component.html",
  styleUrls: ["./video-details.component.css"]
})
export class VideoDetailsComponent implements OnInit {
  public videos = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.youtubeService
      .getVideos({
        channel: { channel: "UCcyq283he07B7_KUX07mmtA", maxResults: 10 }
      })
      .subscribe(data => {
        for (let element of data["items"]) {
          this.videos.push(element);
        }
      });
  }
}
