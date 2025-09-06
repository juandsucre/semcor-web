import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SupportFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: boolean;
}

interface TestimonialCard {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  stats?: {
    label: string;
    value: string;
  };
}

@Component({
  selector: 'app-with-you',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-you.component.html',
  styleUrl: './with-you.component.scss'
})
export class WithYouComponent implements OnInit {
  @Input() sectionTitle: string = 'SEMCOR';
  @Input() sectionSubtitle: string = 'Contigo';
  @Input() mainText: string = '¡Estamos a tu lado cuando';
  @Input() highlightedText: string = 'más lo necesitas!';
  @Input() backgroundImage: string = '../../../../../assets/with-you/semcor-heart.png';
  @Input() mainLogo: string = '../../../../../assets/with-you/SEMCOR CONTIGO-01.png';

  @Output() cardInteraction = new EventEmitter<{cardId: string, action: string}>();

  // Animación de números
  currentStats = {
    patients: 0,
    experience: 0,
    success: 0
  };

  finalStats = {
    patients: 15000,
    experience: 25,
    success: 98
  };

  supportFeatures: SupportFeature[] = [
    {
      id: 'emergency-response',
      icon: '🚑',
      title: 'Respuesta Inmediata',
      description: 'Equipo médico disponible 24/7 para emergencias cardiovasculares',
      highlight: true
    },
    {
      id: 'family-support',
      icon: '👨‍👩‍👧‍👦',
      title: 'Apoyo Familiar',
      description: 'Acompañamiento integral para pacientes y familias',
      highlight: false
    },
    {
      id: 'continuous-care',
      icon: '💝',
      title: 'Cuidado Continuo',
      description: 'Seguimiento personalizado en cada etapa del tratamiento',
      highlight: false
    },
    {
      id: 'emotional-support',
      icon: '🤝',
      title: 'Soporte Emocional',
      description: 'Psicología especializada en pacientes cardiovasculares',
      highlight: true
    }
  ];

  testimonialCards: TestimonialCard[] = [
    {
      id: 'prevention',
      image: '../../../../../assets/with-you/SEMCOR CONTIGO-03.png',
      title: 'Prevención',
      description: 'Programas de prevención cardiovascular personalizados para cuidar tu corazón',
      category: 'Cuidado Preventivo',
      stats: {
        label: 'Pacientes Atendidos',
        value: '5,000+'
      }
    },
    {
      id: 'treatment',
      image: '../../../../../assets/with-you/SEMCOR CONTIGO-04.png',
      title: 'Tratamiento',
      description: 'Tecnología de vanguardia y especialistas de clase mundial',
      category: 'Tratamiento Especializado',
      stats: {
        label: 'Procedimientos Exitosos',
        value: '98%'
      }
    },
    {
      id: 'recovery',
      image: '../../../../../assets/with-you/SEMCOR CONTIGO-05.png',
      title: 'Recuperación',
      description: 'Rehabilitación cardiovascular con seguimiento personalizado',
      category: 'Rehabilitación',
      stats: {
        label: 'Tasa de Recuperación',
        value: '95%'
      }
    },
    {
      id: 'wellness',
      image: '../../../../../assets/with-you/SEMCOR CONTIGO-06.png',
      title: 'Bienestar',
      description: 'Programas de bienestar para mantener un corazón saludable',
      category: 'Bienestar Integral',
      stats: {
        label: 'Años de Experiencia',
        value: '25+'
      }
    }
  ];

  ngOnInit() {
    this.animateStats();
  }

  private animateStats() {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      this.currentStats.patients = Math.floor(this.finalStats.patients * progress);
      this.currentStats.experience = Math.floor(this.finalStats.experience * progress);
      this.currentStats.success = Math.floor(this.finalStats.success * progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        this.currentStats = { ...this.finalStats };
      }
    }, interval);
  }

  onCardClick(cardId: string, action: string) {
    this.cardInteraction.emit({ cardId, action });
    console.log('Card interaction:', { cardId, action });
  }

  onFeatureHover(featureId: string) {
    console.log('Feature hovered:', featureId);
  }
}
