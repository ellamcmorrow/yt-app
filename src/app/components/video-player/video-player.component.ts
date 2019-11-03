import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  public videos = [];

  constructor(private youtubeService: YoutubeService) {}
  ngOnInit() {
    this.youtubeService
      .getVideos("UCcyq283he07B7_KUX07mmtA", 10)
      .subscribe(data => {
        for (let element of data["items"]) {
          this.videos.push(element);
        }
      });
    let iframeUrl = `http://www.youtube.com/embed={{videos.id.videoId}}`;
  }
}
