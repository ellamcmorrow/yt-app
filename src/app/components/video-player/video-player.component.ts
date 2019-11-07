import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  public videos = [];
  public iframeUrl;
  public videoItems;

   

  constructor(private youtubeService: YoutubeService) {}
  ngOnInit() {
    this.youtubeService
      .getVideos("UCcyq283he07B7_KUX07mmtA", 10)
      .subscribe(data => {
        this.videoItems = data;
        this.iframeUrl = 'http://www.youtube.com/embed/'+ data.items[0].id.videoId;
        for (let element of data["items"]) {
          this.videos.push(element);
        }
      });
      this.youtubeService.videoUrlSource.subscribe((url) => {
        this.iframeUrl = url;
      })
  }

  updateUrl() {
    this.iframeUrl = 'http://www.youtube.com/embed/' + this.videoItems.items[2].id.videoId;
  }
}
