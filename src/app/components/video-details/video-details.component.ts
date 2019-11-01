import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
  }

}
