import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp(
    
    {
      "projectId":
    "semcor-app",
    "appId":"1:893967158091:web:32d77d147f34ef134536ce",
    "storageBucket":"semcor-app.appspot.com",
    "apiKey":"AIzaSyDMNsrJdZ-WmANaUAjYi1FrKk-1gsfDjcA",
    "authDomain":"semcor-app.firebaseapp.com",
    "messagingSenderId":"893967158091",
    "measurementId":"G-3WNVB6TW6V"}
  
  ))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, importProvidersFrom(provideFirestore(() => getFirestore()))]
};
