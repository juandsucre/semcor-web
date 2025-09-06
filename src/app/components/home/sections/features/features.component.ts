import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CardiovascularFeature {
  id: string;
  iconType: 'emergency' | 'specialists' | 'technology' | 'prevention';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  color: string;
  stats?: {
    value: string;
    label: string;
  };
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  @Input() sectionTitle: string = 'Nuestros Pilares';
  @Input() sectionSubtitle: string = 'Excelencia Cardiovascular';
  @Input() sectionDescription: string = 'Comprometidos con tu bienestar cardiovascular a través de cuatro pilares fundamentales que nos distinguen como líderes en atención cardiológica.';

  @Output() featureAction = new EventEmitter<{featureId: string, action: string}>();

  cardiovascularFeatures: CardiovascularFeature[] = [
    {
      id: 'emergency-care',
      iconType: 'emergency',
      title: 'Atención de Emergencias',
      subtitle: 'Respuesta Inmediata 24/7',
      description: 'Nuestra Línea Roja cardiovascular garantiza atención especializada inmediata las 24 horas. Equipo de emergencias cardiológicas siempre listo para salvar vidas.',
      highlights: [
        'Respuesta en menos de 8 minutos',
        'Unidad móvil de cuidados intensivos',
        'Cardiólogos de guardia permanente',
        'Protocolo de infarto optimizado'
      ],
      color: 'red',
      stats: {
        value: '24/7',
        label: 'Disponibilidad'
      }
    },
    {
      id: 'specialist-team',
      iconType: 'specialists',
      title: 'Especialistas de Elite',
      subtitle: 'Experiencia Reconocida',
      description: 'Equipo multidisciplinario de cardiólogos, cirujanos cardiovasculares y especialistas certificados internacionalmente, dedicados a tu salud cardiovascular.',
      highlights: [
        'Certificación internacional',
        'Más de 7 años de experiencia',
        'Educación médica continua',
        'Investigación cardiovascular activa'
      ],
      color: 'blue',
      stats: {
        value: '15+',
        label: 'Especialistas'
      }
    },
    {
      id: 'advanced-technology',
      iconType: 'technology',
      title: 'Tecnología de Vanguardia',
      subtitle: 'Diagnóstico Preciso',
      description: 'Equipos de última generación para diagnóstico y tratamiento cardiovascular: cateterismo, ecocardiografía 4D, resonancia cardiaca y cirugía mínimamente invasiva.',
      highlights: [
        'Cateterismo de última generación',
        'Ecocardiografía 3D/4D',
        'Resonancia magnética cardiaca',
        'Cirugía robótica cardiovascular'
      ],
      color: 'purple',
      stats: {
        value: '95%',
        label: 'Precisión diagnóstica'
      }
    },
    {
      id: 'prevention-care',
      iconType: 'prevention',
      title: 'Medicina Preventiva',
      subtitle: 'Cuidado Integral',
      description: 'Programas personalizados de prevención cardiovascular, rehabilitación cardiaca y seguimiento continuo para mantener tu corazón sano a largo plazo.',
      highlights: [
        'Evaluación de riesgo cardiovascular',
        'Programas de rehabilitación',
        'Seguimiento personalizado',
        'Educación en salud cardiovascular'
      ],
      color: 'green',
      stats: {
        value: '85%',
        label: 'Éxito preventivo'
      }
    }
  ];

  onFeatureClick(feature: CardiovascularFeature): void {
    this.featureAction.emit({ featureId: feature.id, action: 'learn-more' });
  }

  onFeatureHover(feature: CardiovascularFeature): void {
    this.featureAction.emit({ featureId: feature.id, action: 'hover' });
  }
}
