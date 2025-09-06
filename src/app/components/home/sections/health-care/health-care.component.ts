import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HealthcareValue {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface HealthcareStatistic {
  value: string;
  label: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-health-care',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './health-care.component.html',
  styleUrl: './health-care.component.scss'
})
export class HealthCareComponent implements OnInit {
  @Input() mainTitle: string = 'Cuidamos';
  @Input() highlightedTitle: string = 'Tu Corazón';
  @Input() subtitle: string = 'Con Pasión y Dedicación';
  @Input() description: string = 'Nuestro compromiso va más allá de la medicina tradicional. Combinamos experiencia clínica, tecnología avanzada y un toque humano para brindarte la atención cardiovascular más completa y personalizada.';
  @Input() mission: string = 'Ser tu aliado en el cuidado cardiovascular, ofreciendo soluciones integrales que no solo traten, sino que prevengan y mejoren tu calidad de vida.';

  @Output() valueAction = new EventEmitter<{valueId: string, action: string}>();

  // Estadísticas de impacto
  healthcareStatistics: HealthcareStatistic[] = [
    {
      value: '25+',
      label: 'Años de Experiencia',
      description: 'Décadas dedicadas a la salud cardiovascular',
      icon: 'calendar'
    },
    {
      value: '15,000+',
      label: 'Pacientes Atendidos',
      description: 'Vidas transformadas con nuestra atención',
      icon: 'users'
    },
    {
      value: '98%',
      label: 'Satisfacción',
      description: 'Pacientes que recomiendan nuestros servicios',
      icon: 'heart'
    },
    {
      value: '24/7',
      label: 'Disponibilidad',
      description: 'Atención de emergencias sin descanso',
      icon: 'clock'
    }
  ];

  // Valores institucionales
  healthcareValues: HealthcareValue[] = [
    {
      id: 'excellence',
      icon: 'award',
      title: 'Excelencia Médica',
      description: 'Estándares internacionales en cada procedimiento, diagnóstico y tratamiento que realizamos.',
      color: 'blue'
    },
    {
      id: 'compassion',
      icon: 'heart',
      title: 'Atención Humanizada',
      description: 'Cada paciente es único. Brindamos cuidado personalizado con empatía y comprensión.',
      color: 'red'
    },
    {
      id: 'innovation',
      icon: 'lightbulb',
      title: 'Innovación Constante',
      description: 'Incorporamos las últimas tecnologías y técnicas para ofrecer los mejores resultados.',
      color: 'purple'
    },
    {
      id: 'integrity',
      icon: 'shield',
      title: 'Integridad Total',
      description: 'Transparencia, honestidad y ética en cada decisión que tomamos por tu bienestar.',
      color: 'green'
    }
  ];

  // Animación de números
  animatedStats: {[key: string]: number} = {};

  ngOnInit() {
    this.animateStatistics();
  }

  onValueClick(value: HealthcareValue): void {
    this.valueAction.emit({ valueId: value.id, action: 'learn-more' });
  }

  private animateStatistics(): void {
    // Simular animación de conteo para las estadísticas
    this.healthcareStatistics.forEach((stat, index) => {
      const numericValue = parseInt(stat.value.replace(/\D/g, ''));
      if (numericValue) {
        let current = 0;
        const increment = numericValue / 50; // 50 pasos para la animación
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
          }
          this.animatedStats[stat.label] = Math.floor(current);
        }, 40); // 40ms por paso = ~2 segundos total
      }
    });
  }
}
