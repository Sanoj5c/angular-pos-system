import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  desc: string;
  monthlyPrice: number;
  annualPrice: number;
  featured: boolean;
  badge?: string;
  cta: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  features: Feature[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  isAnnual = false;

  plans: Plan[] = [
    {
      name: 'Starter',
      desc: 'Perfect for new businesses just getting off the ground.',
      monthlyPrice: 0,
      annualPrice: 0,
      featured: false,
      cta: 'Get started free',
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',
      iconColor: 'var(--primary-color)',
      iconBg: 'rgba(44,62,80,0.08)',
      features: [
        { text: '1 terminal / register', included: true },
        { text: 'Up to 50 products', included: true },
        { text: 'Basic sales reports', included: true },
        { text: 'Email support', included: true },
        { text: 'Multi-location', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'API access', included: false },
      ]
    },
    {
      name: 'Growth',
      desc: 'For scaling teams that need more power and insights.',
      monthlyPrice: 49,
      annualPrice: 39,
      featured: true,
      badge: 'Most Popular',
      cta: 'Start 14-day free trial',
      icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
      iconColor: 'var(--green-color)',
      iconBg: 'rgba(22,160,133,0.12)',
      features: [
        { text: 'Up to 5 terminals', included: true },
        { text: 'Unlimited products', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Multi-location (up to 3)', included: true },
        { text: 'Priority support', included: true },
        { text: 'Customer loyalty tools', included: true },
        { text: 'API access', included: false },
      ]
    },
    {
      name: 'Enterprise',
      desc: 'Custom solutions for large operations and franchises.',
      monthlyPrice: 129,
      annualPrice: 99,
      featured: false,
      cta: 'Contact sales',
      icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      iconColor: 'var(--blue-color)',
      iconBg: 'rgba(41,128,185,0.1)',
      features: [
        { text: 'Unlimited terminals', included: true },
        { text: 'Unlimited products', included: true },
        { text: 'Custom analytics & reports', included: true },
        { text: 'Unlimited locations', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Customer loyalty tools', included: true },
        { text: 'Full API access', included: true },
      ]
    }
  ];

  trustItems = [
    {
      text: 'No credit card required',
      icon: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>'
    },
    {
      text: 'Cancel anytime',
      icon: '<polyline points="20 6 9 17 4 12"/>'
    },
    {
      text: '24/7 live support',
      icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
    }
  ];

  toggleBilling(): void {
    this.isAnnual = !this.isAnnual;
  }

  onSelectPlan(plan: Plan): void {
    console.log('Selected plan:', plan.name);
  }
}