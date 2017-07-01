import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './Dashboard/dashboard.component';
import {ErrorPreventionComponent} from './ErrPrevention/error-prevention.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorPreventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
