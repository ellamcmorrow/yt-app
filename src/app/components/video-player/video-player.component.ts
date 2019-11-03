import { Component, Input, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {}
}
