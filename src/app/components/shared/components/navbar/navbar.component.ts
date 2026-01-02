import { Component, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface NavigationItem {
  id: string;
  label: string;
  route?: string;
  action?: string;
  icon?: string;
  isSpecial?: boolean;
  badge?: string;
  subItems?: NavigationItem[];
}

interface ContactInfo {
  phone: string;
  emergency: string;
  email: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() logoSrc: string = 'assets/semcor.png';
  @Input() logoAlt: string = 'SEMCOR Logo';
  @Input() isTransparent: boolean = false;
  
  @Output() navigationAction = new EventEmitter<{itemId: string, action: string}>();
  @Output() emergencyCall = new EventEmitter<void>();

  public isCollapsed = true;
  public isScrolled = false;
  public activeItem = 'inicio';

  contactInfo: ContactInfo = {
    phone: '+58 412 4521895',
    emergency: '+58 (1) 911-SEMCOR',
    email: 'contacto@semcor.com'
  };

  navigationItems: NavigationItem[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      route: '/home'
    },
    {
      id: 'servicios',
      label: 'Servicios',
      action: 'scroll',
      route: '#servicios'
    },
    {
      id: 'nosotros',
      label: 'Nosotros',
      action: 'scroll',
      route: '#why-choose-us'
    },
    {
      id: 'contacto',
      label: 'Contacto',
      action: 'scroll',
      route: '#footer'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.setActiveItemFromRoute();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  onNavigationClick(item: NavigationItem, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    this.activeItem = item.id;
    this.isCollapsed = true; // Cerrar menú móvil

    if (item.action === 'emergency') {
      this.onEmergencyClick();
    } else if (item.action === 'scroll' && item.route?.startsWith('#')) {
      // Smooth scroll to section
      const sectionId = item.route.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.route && !item.route.startsWith('#')) {
      this.router.navigate([item.route]);
    }

    this.navigationAction.emit({ itemId: item.id, action: item.action || 'navigate' });
  }

  onEmergencyClick() {
    this.emergencyCall.emit();
    // Mostrar modal de emergencia o llamar directamente
    this.showEmergencyModal();
  }

  private showEmergencyModal() {
    const confirmed = confirm(
      `🚨 LÍNEA ROJA - EMERGENCIAS CARDIOVASCULARES 24/7\n\n` +
      `📞 ${this.contactInfo.emergency}\n\n` +
      `¿Desea llamar ahora?`
    );
    
    if (confirmed) {
      window.location.href = `tel:${this.contactInfo.emergency}`;
    }
  }

  private setActiveItemFromRoute() {
    const currentRoute = this.router.url;
    const foundItem = this.navigationItems.find(item => 
      item.route && currentRoute.includes(item.route)
    );
    
    if (foundItem) {
      this.activeItem = foundItem.id;
    }
  }

  onLogoClick() {
    this.router.navigate(['/home']);
    this.activeItem = 'inicio';
  }

  // WhatsApp link generator
  getWhatsAppLink(): string {
    // Remove spaces, dashes, and parentheses from phone number
    const cleanPhone = this.contactInfo.phone.replace(/[\s\-\(\)]/g, '');
    const message = encodeURIComponent('Hola, me gustaría agendar una cita médica.');
    return `https://wa.me/${cleanPhone}?text=${message}`;
  }

  // Format phone for display
  formatPhoneDisplay(phone: string): string {
    // Return formatted phone number for display
    return phone;
  }
}
