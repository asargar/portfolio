import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  data = ConfigService.getConfig().educationDetails;

}
