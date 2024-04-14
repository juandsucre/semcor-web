import { Routes } from '@angular/router';
import { CarreraFormComponent } from './components/carrera-form/carrera-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [


    { path: '', component: HomeComponent },
    { path: 'semcorrun', component: CarreraFormComponent }
];
