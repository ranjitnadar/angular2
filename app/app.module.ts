import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }   from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';

import { route } from './app.route';

@NgModule({
  imports:      [ BrowserModule,route ],
  declarations: [ AppComponent,NavbarComponent, JumbotronComponent,HomeComponent,AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }