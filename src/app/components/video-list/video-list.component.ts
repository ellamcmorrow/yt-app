import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { YoutubeService } from "../../services/youtube.service";
// import { VideoPlayerComponent } from "../video-player/video-player.component";
// import { YoutubeSafeUrlPipe } from '../../pipes/youtube-safe-url.pipe';

import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent {
  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.videos = [];
    this.youtubeService
      .getVideosForChanel("UCcyq283he07B7_KUX07mmtA", 10)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        for (let element of list["items"]) {
          this.videos.push(element);
        }
      });
  }
}
