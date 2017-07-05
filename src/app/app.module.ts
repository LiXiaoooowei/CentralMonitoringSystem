import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './Dashboard/dashboard.component';
import {ErrorPreventionComponent} from './ErrPrevention/error-prevention.component';
import {StockQuoteService} from './Services/stock-quote.service';
import {CreateTradeRecordComponent} from './CreateTradeRecord/create-trade-record.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDBSr1JH-MLoinouS1iKnT-_MMC0g3RKYM',
  authDomain: 'centralmonitoringsystem-1a619.firebaseapp.com',
  databaseURL: 'https://centralmonitoringsystem-1a619.firebaseio.com',
  projectId: 'centralmonitoringsystem-1a619',
  storageBucket: '',
  messagingSenderId: '955806803705'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorPreventionComponent,
    CreateTradeRecordComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [StockQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
