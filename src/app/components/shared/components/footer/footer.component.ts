import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  id: string;
  label: string;
  route?: string;
  action?: string;
  icon?: string;
  isExternal?: boolean;
}

interface SocialMedia {
  id: string;
  name: string;
  icon: string;
  url: string;
  color: string;
}

interface ContactInfo {
  address: string;
  city: string;
  phone: string;
  emergency: string;
  email: string;
  schedule: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() companyName: string = 'Grupo SEMCOR';
  @Input() year: number = new Date().getFullYear();
  @Input() logoSrc: string = 'assets/semcor-white.png';

  @Output() footerAction = new EventEmitter<{linkId: string, action: string}>();
  @Output() socialClick = new EventEmitter<{platform: string, url: string}>();

  contactInfo: ContactInfo = {
    address: 'Calle 123 #45-67',
    city: 'Valle de la Pascua, Venezuela',
    phone: '+58   123-4567',
    emergency: '+58 (1) 911-SEMCOR',
    email: 'contacto@semcor.com',
    schedule: 'Lun - Vie: 7:00 AM - 7:00 PM'
  };

  services: Service[] = [
    {
      id: 'clinica',
      name: 'SEMCOR Clínica',
      description: 'Especialidades cardiovasculares',
      icon: '🏥'
    },
    {
      id: 'laboratorio',
      name: 'SEMCOR Lab',
      description: 'Análisis especializados',
      icon: '🔬'
    },
    {
      id: 'linea-roja',
      name: 'Línea Roja',
      description: 'Emergencias 24/7',
      icon: '🚨'
    },
    {
      id: 'semcor-run',
      name: 'SEMCOR Run',
      description: 'Carrera benéfica',
      icon: '🏃‍♀️'
    }
  ];

  quickLinks: FooterLink[] = [
    { id: 'inicio', label: 'Inicio', route: '/home', icon: '🏠' },
    { id: 'servicios', label: 'Servicios', route: '/servicios', icon: '🏥' },
    { id: 'acerca', label: 'Acerca de', route: '/acerca', icon: 'ℹ️' },
    { id: 'contacto', label: 'Contacto', route: '/contacto', icon: '📞' },
    { id: 'citas', label: 'Agendar Cita', route: '/citas', icon: '📅' },
    { id: 'emergencias', label: 'Emergencias', action: 'emergency', icon: '🚨' }
  ];

  legalLinks: FooterLink[] = [
    { id: 'privacidad', label: 'Política de Privacidad', route: '/privacidad' },
    { id: 'terminos', label: 'Términos y Condiciones', route: '/terminos' },
    { id: 'cookies', label: 'Política de Cookies', route: '/cookies' },
    { id: 'habeas-data', label: 'Habeas Data', route: '/habeas-data' }
  ];

  socialMedia: SocialMedia[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'assets/socials/facebook.png',
      url: 'https://facebook.com/gruposemcor',
      color: '#1877f2'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: 'assets/socials/instagram.png',
      url: 'https://instagram.com/gruposemcor',
      color: '#e4405f'
    },
    // {
    //   id: 'twitter',
    //   name: 'Twitter',
    //   icon: 'assets/socials/twitter.png',
    //   url: 'https://twitter.com/gruposemcor',
    //   color: '#1da1f2'
    // },
    // {
    //   id: 'linkedin',
    //   name: 'LinkedIn',
    //   icon: '👔',
    //   url: 'https://linkedin.com/company/gruposemcor',
    //   color: '#0077b5'
    // },
    // {
    //   id: 'youtube',
    //   name: 'YouTube',
    //   icon: '📺',
    //   url: 'https://youtube.com/gruposemcor',
    //   color: '#ff0000'
    // }
  ];

  onLinkClick(link: FooterLink) {
    if (link.action === 'emergency') {
      this.onEmergencyClick();
    } else if (link.isExternal && link.route) {
      window.open(link.route, '_blank', 'noopener,noreferrer');
    }
    
    this.footerAction.emit({ linkId: link.id, action: link.action || 'navigate' });
  }

  onSocialClick(social: SocialMedia) {
    window.open(social.url, '_blank', 'noopener,noreferrer');
    this.socialClick.emit({ platform: social.id, url: social.url });
  }

  public onEmergencyClick() {
    const confirmed = confirm(
      `🚨 LÍNEA ROJA - EMERGENCIAS CARDIOVASCULARES 24/7\n\n` +
      `📞 ${this.contactInfo.emergency}\n\n` +
      `¿Desea llamar ahora?`
    );
    
    if (confirmed) {
      window.location.href = `tel:${this.contactInfo.emergency}`;
    }
  }

  onEmailClick() {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  onPhoneClick() {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }
}
