import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroAction {
  id: string;
  label: string;
  type: 'primary' | 'secondary' | 'emergency';
  icon?: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() backgroundImage: string = 'assets/womandoc2.jpg';
  @Input() logoSrc: string = 'assets/logoSemcor.png';
  @Input() logoAlt: string = 'Logo SEMCOR';
  @Input() mainTitle: string = 'Especialistas en';
  @Input() highlightedTitle: string = 'Salud Cardiovascular';
  @Input() subtitle: string = 'Más de 5 años brindando atención médica especializada con tecnología de vanguardia y el compromiso de cuidar tu corazón.';

  @Output() heroAction = new EventEmitter<{actionId: string, type: string}>();

  heroActions: HeroAction[] = [
    // {
    //   id: 'agendar-cita',
    //   label: 'Agendar Consulta',
    //   type: 'primary'
    // },
    // {
    //   id: 'conocer-servicios',
    //   label: 'Conocer Servicios',
    //   type: 'secondary'
    // },
    {
      id: 'emergencias',
      label: 'Emergencias 24/7',
      type: 'emergency'
    }
  ];

  onActionClick(action: HeroAction) {
    this.heroAction.emit({ actionId: action.id, type: action.type });
  }
}
