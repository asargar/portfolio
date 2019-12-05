import { Component, OnInit, Input } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  @Input() techList: any[];
  static previousToolTip: NgbTooltip;

  constructor() { }

  ngOnInit() {
  }

  showToolTip(toolTip: NgbTooltip) {
    if (TechListComponent.previousToolTip) {
      TechListComponent.previousToolTip.close();
    }
    toolTip.open();
    TechListComponent.previousToolTip = toolTip;
  }
}
