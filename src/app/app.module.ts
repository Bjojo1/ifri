import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaisonComponent } from './saves/maison/maison.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from "primeng/accordion";
import {MenuItem} from "primeng/api";
import { UserComponent } from './auth/user/user.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule} from "@angular/forms";
import {ButtonsModule, MDBBootstrapModule, NavbarModule, WavesModule} from "angular-bootstrap-md";
// For MDB Angular Free
// import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    MaisonComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      AccordionModule,
      FormsModule,
      AppRoutingModule,
      NavbarModule,
      WavesModule,
      ButtonsModule,
      MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
