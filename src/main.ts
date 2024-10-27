import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app.routing.module';
import { HttpClientModule } from '@angular/common/http'; // Importando HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(HttpClientModule) // Adicionando HttpClientModule aqui
  ]
});
