import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    CounterComponent,
  ],
  template: `
    <app-banner></app-banner>
    <app-counter></app-counter>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
