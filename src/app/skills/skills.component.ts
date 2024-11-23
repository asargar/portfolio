import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  data = ConfigService.getConfig().skills;

}
