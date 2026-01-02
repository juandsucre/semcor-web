import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

// Importar los nuevos componentes
import { HeroComponent } from './sections/hero/hero.component';
import { HealthCareComponent } from './sections/health-care/health-care.component';
import { FeaturesComponent } from './sections/features/features.component';
import { SemcorRunComponent } from './sections/semcor-run/semcor-run.component';
import { ServicesComponent } from './sections/semcor-services/services.component';
import { WithYouComponent } from './sections/with-you/with-you.component';
import { WhyChooseUsComponent } from './sections/why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    HealthCareComponent,
    FeaturesComponent,
    SemcorRunComponent,
    ServicesComponent,
    WithYouComponent,
    WhyChooseUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  handleScientificConferenceAction(event: {action: string, type: string}) {
    console.log('Scientific Conference action:', event);
    
    switch(event.action) {
      case 'register':
        // Navegar a página de inscripciones de la jornada científica
        this.router.navigate(['/jornada-cientifica/inscripciones']);
        break;
      case 'info':
        // Mostrar más información sobre la jornada
        this.router.navigate(['/jornada-cientifica/informacion']);
        break;
      case 'session-info':
        // Mostrar información específica de la sesión
        console.log('Mostrando información de sesión tipo:', event.type);
        // Podrías abrir un modal o navegar a detalles específicos
        break;
      default:
        console.log('Acción no reconocida:', event.action);
    }
  }

  handleServiceAction(event: {serviceId: string, action: string}) {
    console.log('Service action:', event);
    
    switch(event.serviceId) {
      case 'semcor-clinica':
        // Navegar a página de citas o abrir modal de contacto
        this.router.navigate(['/citas']);
        break;
      case 'linea-roja':
        // Mostrar información de emergencias o número de teléfono
        this.showEmergencyInfo();
        break;
      case 'semcor-lab':
        // Navegar a página de laboratorio
        this.router.navigate(['/laboratorio']);
        break;
      default:
        console.log('Servicio no reconocido:', event.serviceId);
    }
  }

  private showEmergencyInfo() {
    // Aquí podrías mostrar un modal con información de emergencias
    // o redirigir a una página específica
    alert('Línea de Emergencias: +57 (1) 123-4567\nDisponible 24/7');
  }

  handleWithYouInteraction(event: {cardId: string, action: string}) {
    console.log('With You interaction:', event);
    
    switch(event.cardId) {
      case 'prevention':
        // Navegar a página de prevención
        this.router.navigate(['/prevencion']);
        break;
      case 'treatment':
        // Navegar a página de tratamientos
        this.router.navigate(['/tratamientos']);
        break;
      case 'recovery':
        // Navegar a página de recuperación
        this.router.navigate(['/recuperacion']);
        break;
      case 'wellness':
        // Navegar a página de bienestar
        this.router.navigate(['/bienestar']);
        break;
      default:
        console.log('Card no reconocida:', event.cardId);
    }
  }

  handleHeroAction(event: {actionId: string, type: string}) {
    console.log('Hero action:', event);
    
    switch(event.actionId) {
      case 'agendar-cita':
        // Navegar a página de citas
        this.router.navigate(['/citas']);
        break;
      case 'conocer-servicios':
        // Navegar a página de servicios
        this.router.navigate(['/servicios']);
        break;
      case 'emergencias':
        // Mostrar información de emergencias
        this.showEmergencyInfo();
        break;
      default:
        console.log('Acción no reconocida:', event.actionId);
    }
  }

  handleHealthcareValueAction(event: {valueId: string, action: string}) {
    console.log('Healthcare value action:', event);
    
    switch(event.valueId) {
      case 'excellence':
        // Navegar a página de excelencia médica
        this.router.navigate(['/excelencia-medica']);
        break;
      case 'compassion':
        // Navegar a página de atención humanizada
        this.router.navigate(['/atencion-humanizada']);
        break;
      case 'innovation':
        // Navegar a página de innovación
        this.router.navigate(['/innovacion']);
        break;
      case 'integrity':
        // Navegar a página de integridad
        this.router.navigate(['/integridad']);
        break;
      default:
        console.log('Valor no reconocido:', event.valueId);
    }
  }

  handleFeatureAction(event: {featureId: string, action: string}) {
    console.log('Feature action:', event);
    
    switch(event.featureId) {
      case 'emergency-care':
        // Navegar a página de emergencias
        this.router.navigate(['/emergencias']);
        break;
      case 'specialist-team':
        // Navegar a página de especialistas
        this.router.navigate(['/especialistas']);
        break;
      case 'advanced-technology':
        // Navegar a página de tecnología
        this.router.navigate(['/tecnologia']);
        break;
      case 'prevention-care':
        // Navegar a página de prevención
        this.router.navigate(['/prevencion']);
        break;
      default:
        console.log('Feature no reconocida:', event.featureId);
    }
  }
}
