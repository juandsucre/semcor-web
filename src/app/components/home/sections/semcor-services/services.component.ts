import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  logoImage: string;
  features: string[];
  ctaText: string;
  isHighlighted?: boolean;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input() sectionTitle: string = 'Servicios Especializados';
  @Input() sectionSubtitle: string = 'Cuidado integral del corazón con tecnología de vanguardia';
  @Input() socialHandle: string = '@GrupoSemcor';

  @Output() serviceAction = new EventEmitter<{serviceId: string, action: string}>();

  onServiceClick(serviceId: string, action: string): void {
    this.serviceAction.emit({ serviceId, action });
    
    // Tracking de analytics (opcional)
    // Si necesitas Google Analytics, agrega la declaración global en el index.html
    console.log('Service clicked:', { serviceId, action });
  }

  services: Service[] = [
    {
      id: 'semcor-clinica',
      title: 'SEMCOR Clínica',
      subtitle: 'Especialidades Cardiovasculares',
      description: 'Centro médico especializado en cardiología con los más altos estándares de calidad y tecnología de vanguardia para el cuidado de tu corazón.',
      mainImage: '../../../../../assets/services-img/services-1.png',
      logoImage: '../../../../../assets/services-img/semcor.png',
      features: [
        'Cardiología Intervencionista',
        'Ecocardiografía Doppler',
        'Holter y Monitoreo 24h',
        'Cirugía Cardiovascular'
      ],
      ctaText: 'Agendar Consulta',
      color: {
        primary: '#920033',
        secondary: '#2F3068',
        gradient: 'linear-gradient(135deg, #920033, #2F3068)'
      }
    },
    {
      id: 'linea-roja',
      title: 'Línea Roja',
      subtitle: 'Emergencias Cardiovasculares 24/7',
      description: 'Servicio de emergencias especializadas disponible las 24 horas para atender urgencias cardiovasculares con respuesta inmediata y profesional.',
      mainImage: '../../../../../assets/services-img/services-2.png',
      logoImage: '../../../../../assets/services-img/linearoja.png',
      features: [
        'Atención 24/7',
        'Ambulancia Especializada',
        'UCI Móvil',
        'Respuesta < 15 min'
      ],
      ctaText: 'Línea de Emergencia',
      isHighlighted: true,
      color: {
        primary: '#DC2626',
        secondary: '#991B1B',
        gradient: 'linear-gradient(135deg, #DC2626, #991B1B)'
      }
    },
    {
      id: 'semcor-lab',
      title: 'SEMCOR Lab',
      subtitle: 'Laboratorio Cardiovascular',
      description: 'Laboratorio especializado en análisis cardiovasculares con tecnología de última generación para diagnósticos precisos y oportunos.',
      mainImage: '../../../../../assets/services-img/services-3.png',
      logoImage: '../../../../../assets/services-img/semcorlab.png',
      features: [
        'Biomarcadores Cardíacos',
        'Perfil Lipídico Avanzado',
        'Pruebas de Coagulación',
        'Resultados en 2 horas'
      ],
      ctaText: 'Solicitar Exámenes',
      color: {
        primary: '#059669',
        secondary: '#047857',
        gradient: 'linear-gradient(135deg, #059669, #047857)'
      }
    }
  ];
}
