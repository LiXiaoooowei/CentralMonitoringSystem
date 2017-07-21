import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

import {StockQuoteService} from '../Services/stock-quote.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-errprevention',
  templateUrl: './error-prevention.component.html',
  styleUrls: ['./error-prevention.component.css']
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
    this.stockQuoteService.getQuote(symbol, time).then(val => {
      firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
        .update({
          price_ext: val
        });
      console.log(val);
    }).catch(error => {
      firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
        .update({
          price_ext: 'error'
        });
      console.log('error');
    });
  }

  correctQuote(symbol, time, price_ext, price_int, amount): void {
    firebase.database().ref().child('issuerecords').push({
      time_transaction: time,
      symbol: symbol,
      amount: amount,
      price_int: price_int,
      price_ext: price_ext,
      action: 'Corrected',
      time_action: this.computeCurrentDateTime()
    });
    firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
      .update({
        price_int: price_ext
      });
  }

  ignoreQuote(symbol, time, price_ext, price_int, amount): void {
    firebase.database().ref().child('issuerecords').push({
      time_transaction: time,
      symbol: symbol,
      amount: amount,
      price_int: price_int,
      price_ext: price_ext,
      action: 'Ignored',
      time_action: this.computeCurrentDateTime()
    });
    firebase.database().ref().child('traders').child(this.uid).child('records').child(time + symbol)
      .update({
        hide: true
      });
  }

  computeCurrentDateTime(): string {
    let dd = (new Date()).getDate().toString(10);
    if (parseInt(dd, 10) < 10) {
      dd = '0' + dd;
    }
    let mm = ((new Date()).getMonth() + 1).toString(10);
    if (parseInt(mm, 10) < 10) {
      mm = '0' + mm;
    }
    const yyyy = (new Date()).getFullYear();
    let hh = (new Date()).getHours().toString(10);
    if (parseInt(hh, 10) < 10) {
      hh = '0' + hh;
    }
    let min = (new Date()).getMinutes().toString(10);
    if (parseInt(min, 10) < 10) {
      min = '0' + min;
    }
    let ss = (new Date()).getSeconds().toString(10);
    if (parseInt(ss, 10) < 10) {
      ss = '0' + ss;
    }
    return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss;
  }

  goBack(): void {
    this.location.back();
  }
}
