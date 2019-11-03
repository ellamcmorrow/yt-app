import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { VideoListComponent } from "./components/video-list/video-list.component";
import { HttpClientModule } from "@angular/common/http";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { YoutubeSafeUrlPipe } from "./pipes/youtube-safe-url.pipe";
import { VideoDetailsComponent } from "./components/video-details/video-details.component";
import { YoutubeService } from "./services/youtube.service";

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoPlayerComponent,
    YoutubeSafeUrlPipe,
    VideoDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
