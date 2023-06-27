import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;
  mobileNav() {

    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
