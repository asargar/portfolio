import { Component, OnInit } from '@angular/core';
import { education } from '../../assets/json/config.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = education;
  }

}
