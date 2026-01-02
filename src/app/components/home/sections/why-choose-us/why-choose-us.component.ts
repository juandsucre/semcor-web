import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reason {
  id: string;
  icon: string;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  };
}

interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  sectionTitle = 'Por qué elegirnos';
  sectionSubtitle = 'Tu salud cardiovascular en las mejores manos';

  reasons: Reason[] = [
    {
      id: 'experience',
      icon: 'award',
      title: 'Experiencia Comprobada',
      description: 'Más de 5 años brindando atención cardiovascular de excelencia con resultados comprobados.',
      stats: {
        value: '5+',
        label: 'Años de experiencia'
      }
    },
    {
      id: 'technology',
      icon: 'chip',
      title: 'Tecnología Avanzada',
      description: 'Equipos de última generación para diagnósticos precisos y tratamientos efectivos.',
      stats: {
        value: '100%',
        label: 'Equipamiento moderno'
      }
    },
    {
      id: 'team',
      icon: 'users',
      title: 'Equipo Especializado',
      description: 'Cardiólogos certificados con formación internacional y dedicación al cuidado del paciente.',
      stats: {
        value: '15+',
        label: 'Especialistas'
      }
    },
    {
      id: 'availability',
      icon: 'clock',
      title: 'Disponibilidad Total',
      description: 'Atención de emergencias 24/7 y consultas programadas para tu comodidad.',
      stats: {
        value: '24/7',
        label: 'Disponibilidad'
      }
    }
  ];

  certifications: Certification[] = [
    {
      id: 'cardiology',
      name: 'Certificación en Cardiología',
      description: 'Reconocimiento nacional e internacional',
      icon: 'badge-check'
    },
    {
      id: 'quality',
      name: 'Estándares de Calidad',
      description: 'Cumplimiento de normativas médicas',
      icon: 'shield-check'
    },
    {
      id: 'innovation',
      name: 'Innovación Médica',
      description: 'Actualización constante en técnicas',
      icon: 'sparkles'
    }
  ];

  onReasonClick(reasonId: string): void {
    console.log('Reason clicked:', reasonId);
    // Implement navigation or modal logic
  }
}
