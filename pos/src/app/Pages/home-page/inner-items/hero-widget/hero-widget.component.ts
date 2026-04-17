import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-hero-widget',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './hero-widget.component.html',
  styleUrls: ['./hero-widget.component.scss']
})
export class HeroWidgetComponent {
  stats = [
    { value: '1,200+', label: 'Businesses' },
    { value: '$2.4B', label: 'Processed' },
    { value: '99.9%', label: 'Uptime' }
  ];

  // Bar chart heights as percentages
  bars = [40, 65, 50, 80, 55, 90, 72, 60, 85, 95, 70, 88];

  onGetStarted(): void {
    console.log('Navigate to signup');
  }

  onWatchDemo(): void {
    console.log('Open demo modal');
  }
}