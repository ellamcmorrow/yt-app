import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
//a pipe takes in data and transforms it into a desired output.
@Pipe({
  name: 'youtubeSafeUrl'
})
export class YoutubeSafeUrlPipe implements PipeTransform {
  //sanitize the url to tell angular its safe to use thid url in this given context
  constructor(private sanitizer: DomSanitizer) { }
  transform(videoId: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
  }
}

