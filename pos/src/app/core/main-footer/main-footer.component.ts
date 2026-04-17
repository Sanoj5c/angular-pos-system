import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {
  email = '';
  subscribed = false;
  currentYear = new Date().getFullYear();

  onSubscribe(): void {
    const trimmed = this.email.trim();
    if (!trimmed || !trimmed.includes('@')) return;
    // TODO: wire up to your API
    this.subscribed = true;
    this.email = '';
  }
}