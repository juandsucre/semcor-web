import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  constructor(private router: Router) {}


  goToSemcorRun() {
    this.router.navigate(['/semcorrun']);


  };
}
