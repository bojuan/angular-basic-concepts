import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  itemsNav: { label: string; href: string }[] = [
    {
      label: 'Compañias',
      href: '/companies',
    },
    {
      label: 'Crear',
      href: '/create-company',
    },
  ];
  activeRoute: string = 'Compañias';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getCurrentPath();
      }
    });
  }

  getCurrentPath() {
    this.activeRoute =
      this.itemsNav.find((item) => item.href === this.router.url)?.label ?? '';

    console.log('this.activeRoute -->', this.activeRoute);
  }
}
