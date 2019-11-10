import { Component, Input } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent {
  video: Video;
  // private unsubscribe$: Subject<any> = new Subject();
  //injecting the youtuve service into my component.
  constructor(private youtubeService: YoutubeService) {}
  //push the videos returned from api into a video array.
  ngOnInit() {
    this.youtubeService.getVideos({
      channel: {
        channel: "UCcyq283he07B7_KUX07mmtA",
        maxResults: 10
      }
    });
    this.youtubeService.dataStream.subscribe(video => (this.Video = video));
  }

  setUrl(url) {
    this.youtubeService.setVideoUrl(url);
  }
}
