import { Component, OnInit } from '@angular/core';
import { skills } from '../../assets/json/config.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    this.data = skills;
  }

}
