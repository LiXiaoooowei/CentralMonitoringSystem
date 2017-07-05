import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './Dashboard/dashboard.component';
import {ErrorPreventionComponent} from './ErrPrevention/error-prevention.component';
import {StockQuoteService} from './Services/stock-quote.service';
import {CreateTradeRecordComponent} from './CreateTradeRecord/create-trade-record.component';
import {LoginComponent} from './Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorPreventionComponent,
    CreateTradeRecordComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [StockQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
