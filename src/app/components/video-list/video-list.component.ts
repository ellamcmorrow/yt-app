import { Component, Input } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent {
  public videos = [];

  // private unsubscribe$: Subject<any> = new Subject();
  //injecting the youtuve service into my component.
  constructor(private youtubeService: YoutubeService) {}
  //push the videos returned from api into a video array.
  ngOnInit() {
    this.youtubeService
      .getVideos("UCcyq283he07B7_KUX07mmtA", 10)
      .subscribe(data => {
        for (let element of data["items"]) {
          this.videos.push(element); 
        }
      });
  }
}
