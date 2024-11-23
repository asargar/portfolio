import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  data = ConfigService.getConfig().projects;

}
