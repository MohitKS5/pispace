import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SlickModule} from 'ngx-slick';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { TechshikhsaComponent } from './components/events/techshikhsa/techshikhsa.component';
import {RoutingModule} from '../app.routing';
import { SlickComponent } from './components/slick/slick.component';
import { FocusComponent } from './components/focus/focus.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SocLinksComponent } from './components/soc-links/soc-links.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    TechshikhsaComponent,
    SlickComponent,
    FocusComponent,
    ContactComponent,
    SocLinksComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RoutingModule,
    SlickModule.forRoot(),
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
