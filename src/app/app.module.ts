import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './Dashboard/dashboard.component';
import {ErrorPreventionComponent} from './ErrPrevention/error-prevention.component';
import {StockQuoteService} from './Services/stock-quote.service';
import {CreateTradeRecordComponent} from './CreateTradeRecord/create-trade-record.component';

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
    AppRoutingModule,
  ],
  providers: [StockQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
