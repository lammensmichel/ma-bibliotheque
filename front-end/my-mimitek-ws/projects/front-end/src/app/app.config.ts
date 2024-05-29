import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { withDataCustomPreloadStrategy } from 'tools-Routes';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes) // withPreloading(withDataCustomPreloadStrategy) TODO: 
    , provideClientHydration()]
};
