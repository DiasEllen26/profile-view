import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { RandomUserComponent } from './components/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    RandomUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
