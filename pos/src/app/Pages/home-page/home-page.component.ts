import { Component } from '@angular/core';
import { HeroWidgetComponent } from "./inner-items/hero-widget/hero-widget.component";
import { AboutUsWidgetComponent } from "./inner-items/about-us-widget/about-us-widget.component";
import { PricingComponent } from "./inner-items/pricing/pricing.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroWidgetComponent, AboutUsWidgetComponent, PricingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
