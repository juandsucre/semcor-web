import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
