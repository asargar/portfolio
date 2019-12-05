import { Component, OnInit } from '@angular/core';
import { experience } from '../../assets/json/config.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = experience;
  }

}
