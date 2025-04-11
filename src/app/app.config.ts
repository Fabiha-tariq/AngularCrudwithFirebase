import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase} from '@angular/fire/database';
import { routes } from './app.routes';
import { environments } from '../environments/environments';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideFirebaseApp(()=>initializeApp(environments.firebaseConfig)),
  provideDatabase(()=>getDatabase()),
  ]
};
