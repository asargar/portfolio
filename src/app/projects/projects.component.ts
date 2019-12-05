import { Component, OnInit } from '@angular/core';
import { projects } from '../../assets/json/config.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = projects;
  }

}
