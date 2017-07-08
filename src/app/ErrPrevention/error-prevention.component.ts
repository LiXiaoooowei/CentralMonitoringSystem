import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import {StockQuoteService} from '../Services/stock-quote.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-errprevention',
  templateUrl: './error-prevention.component.html',
  styleUrls: [ './error-prevention.component.css' ]
})

export class ErrorPreventionComponent {
   tradeRecords: FirebaseListObservable<any>;
   uid: string;
   constructor(private location: Location, private route: ActivatedRoute, private stockQuoteService: StockQuoteService,
   private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
     this.route.paramMap.switchMap((params: ParamMap) => this.uid = params.get('uid')).subscribe();
     this.tradeRecords = db.list('/traders/' + this.uid + '/records');
   }

   getQuote(symbol, time): void {
     this.stockQuoteService.getQuote(symbol, time).then(function(val) {
        document.getElementById(symbol + time).innerHTML = val;
       firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
         .update({
           price_ext: val
         });
      }).catch();
   }

   correctQuote(symbol, time, price_ext): void {
     firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
       .update({
         price_int: price_ext
       });
   }
   ignoreQuote(symbol, time): void {
     firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
       .update({
         hide: true
       });
   }

   goBack(): void {
     this.location.back();
   }
}
