import { Component, ElementRef, HostListener } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  data = ConfigService.getConfig().navBarConfig;
  isMenuCollapsed: boolean = true;
  constructor(private elementRef: ElementRef) { }

  handleCollapse(event, isMenuCollapsed: boolean) {
    this.isMenuCollapsed = isMenuCollapsed;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuCollapsed = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.isMenuCollapsed = true;
  }
}
