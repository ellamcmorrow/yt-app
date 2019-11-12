import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: "app-video-details",
  templateUrl: "./video-details.component.html",
  styleUrls: ["./video-details.component.css"]
})
export class VideoDetailsComponent {
  videos: any[];
  private datastream$: Subject<any> = new Subject();

  constructor(private youtubeService: YoutubeService) {}
  ngOnInit() {
  this.videos = [];
  this.youtubeService
    .getVideos('UCcyq283he07B7_KUX07mmtA', 15)
    .pipe(takeUntil(this.datastream$))
    .subscribe(data => {
      for (let element of data["items"]) {
        this.videos.push(element)
      }

    });
  }
}

