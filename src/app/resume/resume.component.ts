import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  resumeFile: string = ConfigService.getConfig().resumeFile;
  constructor(private domSanitizer: DomSanitizer) { }

  getResumeURL() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.resumeFile);
  }
}
