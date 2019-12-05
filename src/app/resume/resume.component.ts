import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { resumeFile } from '../../assets/json/config.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeFile: string;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.resumeFile = resumeFile;
  }

  getResumeURL() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.resumeFile);
  }
}
