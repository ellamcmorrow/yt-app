import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: any[];
 
  constructor(private youtubeService: YoutubeService) { }
  
  ngOnInit() {
    this.videos = [];
    this.youtubeService
    .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(lista => {
      for (let element of lista["items"]) {
        this.videos.push(element)
      }
    }
    
  }
  