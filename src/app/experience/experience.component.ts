import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent  {

  data = ConfigService.getConfig().experience;

}
