import { Component, Input } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent {
  videos: any[];
  private datastream$: Subject<any> = new Subject();
  public selectedVideo;

  
  //injecting the youtube service into my component.
  constructor(private youtubeService: YoutubeService) {}
  //push the videos returned from api into a video array.
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



//   setUrl(url) {
//   this.youtubeService.setVideoUrl(url);
//    }
// 
