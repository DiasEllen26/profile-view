import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideClientHydration()
  ]
};
