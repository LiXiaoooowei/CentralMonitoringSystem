import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import {StockQuoteService} from '../Services/stock-quote.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-errprevention',
  templateUrl: './error-prevention.component.html',
  styleUrls: [ './error-prevention.component.css' ]
})

export class ErrorPreventionComponent {
   tradeRecords: FirebaseListObservable<any>;
   tradeQuotes: [any];
   constructor(private location: Location, private stockQuoteService: StockQuoteService,
   private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
     this.tradeRecords = db.list('/traders/' + this.afAuth.auth.currentUser.uid + '/records');
   }

   getQuote(symbol, time): Promise<string> {
      return this.stockQuoteService.getQuote(symbol, time).then( val => document.getElementById(symbol + time).innerHTML = val as string).catch();
   }

   goBack(): void {
     this.location.back();
   }
}
