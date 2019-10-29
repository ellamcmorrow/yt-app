import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { YoutubeService } from "../../services/youtube.service";
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
      .getVideosForChanel("UC_LtA_EtCr7Jp5ofOsYt18g", 15)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        for (let element of list["items"]) {
          this.videos.push(element);
        }
      });
  }
}
