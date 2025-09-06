import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScientificSession {
  id: string;
  time: string;
  title: string;
  speaker: string;
  specialty: string;
  type: 'keynote' | 'workshop' | 'panel' | 'presentation';
}

interface EventHighlight {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-semcor-run',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semcor-run.component.html',
  styleUrl: './semcor-run.component.scss'
})
export class SemcorRunComponent {
  @Input() eventTitle: string = 'Jornada Científica';
  @Input() eventSubtitle: string = 'Avances en Cardiología 2024';
  @Input() eventDate: string = '15 de Noviembre, 2024';
  @Input() eventLocation: string = 'Centro de Convenciones SEMCOR';
  @Input() eventDescription: string = 'Únete a los especialistas más reconocidos en cardiología para explorar los últimos avances, investigaciones y tecnologías que están transformando el cuidado cardiovascular.';
  
  @Output() registrationAction = new EventEmitter<{action: string, type: string}>();

  eventHighlights: EventHighlight[] = [
    {
      icon: 'users',
      title: '15+ Especialistas',
      description: 'Expertos reconocidos internacionalmente',
      color: 'text-blue-600'
    },
    {
      icon: 'clock',
      title: '8 Horas',
      description: 'De contenido científico especializado',
      color: 'text-green-600'
    },
    {
      icon: 'award',
      title: 'Certificación',
      description: 'Créditos de educación médica continua',
      color: 'text-purple-600'
    },
    {
      icon: 'network',
      title: 'Networking',
      description: 'Conecta con profesionales del sector',
      color: 'text-red-600'
    }
  ];

  scientificSessions: ScientificSession[] = [
    {
      id: 'keynote-1',
      time: '09:00 - 10:00',
      title: 'Inteligencia Artificial en Diagnóstico Cardiovascular',
      speaker: 'Dr. María González',
      specialty: 'Cardiología Intervencionista',
      type: 'keynote'
    },
    {
      id: 'workshop-1',
      time: '10:30 - 12:00',
      title: 'Taller: Nuevas Técnicas en Ecocardiografía 3D',
      speaker: 'Dr. Carlos Mendoza',
      specialty: 'Ecocardiografía',
      type: 'workshop'
    },
    {
      id: 'panel-1',
      time: '14:00 - 15:30',
      title: 'Panel: Prevención Cardiovascular en el Siglo XXI',
      speaker: 'Múltiples Especialistas',
      specialty: 'Cardiología Preventiva',
      type: 'panel'
    },
    {
      id: 'presentation-1',
      time: '16:00 - 17:00',
      title: 'Casos Clínicos: Cirugía Cardiovascular Mínimamente Invasiva',
      speaker: 'Dr. Ana Rodríguez',
      specialty: 'Cirugía Cardiovascular',
      type: 'presentation'
    }
  ];

  onRegistrationClick(action: string = 'register'): void {
    this.registrationAction.emit({ action, type: 'scientific-conference' });
  }

  onSessionClick(session: ScientificSession): void {
    this.registrationAction.emit({ 
      action: 'session-info', 
      type: session.type 
    });
  }
}
