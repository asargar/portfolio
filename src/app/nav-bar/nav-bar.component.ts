import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { navBarConfig } from '../../assets/json/config.json';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  data: any;
  isMenuCollapsed: boolean = true;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.data = navBarConfig;
  }

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
