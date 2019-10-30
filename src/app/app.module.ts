import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { VideoListComponent } from "./components/video-list/video-list.component";
import { HttpClientModule } from "@angular/common/http";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { YoutubeSafeUrlPipe } from './pipes/youtube-safe-url.pipe';


@NgModule({
  declarations: [AppComponent, VideoListComponent, VideoPlayerComponent, YoutubeSafeUrlPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
