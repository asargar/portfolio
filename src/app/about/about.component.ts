import { Component, OnInit } from '@angular/core';
import { about } from '../../assets/json/config.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = about;
  }

}
