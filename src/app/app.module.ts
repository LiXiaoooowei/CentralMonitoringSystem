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
import {FirebaseClientService} from './Services/firebase-client.service';
import {CreateTradeRecordComponent} from './CreateTradeRecord/create-trade-record.component';
import {LoginComponent} from './Login/login.component';
import {TraderErrorReportComponent} from './CustomerErrRpt/trader-error-report';
import {ErrorDetectionComponent} from './ErrDetect/error-detection.component';
import {TradeBookingComponent} from './TradeBookingDetails/trade-booking.component';
import {IssueCatcherComponent} from './IssueCatcher/issue-catcher.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorPreventionComponent,
    CreateTradeRecordComponent,
    LoginComponent,
    TraderErrorReportComponent,
    ErrorDetectionComponent,
    TradeBookingComponent,
    IssueCatcherComponent
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
  providers: [StockQuoteService, FirebaseClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
