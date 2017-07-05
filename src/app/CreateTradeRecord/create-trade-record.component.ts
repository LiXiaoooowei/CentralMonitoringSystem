import {Component, Input} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-popup',
  templateUrl: './create-trade-record.component.html',
  styleUrls: ['./create-trade-record.component.css']
})

export class CreateTradeRecordComponent {
  @Input() tradeTime: string;
  @Input() tradeSymbol: string;
  @Input() tradeAmt: string;
  @Input() priceInt: string;

  public visible = false;
  public visibleAnimate = false;

  constructor(private afAuth: AngularFireAuth) {}

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public add(): void {
    console.log(this.tradeTime + ' ' + this.tradeSymbol + ' ' + this.tradeAmt);
    const userRef = firebase.database().ref().child('traders').child(this.afAuth.auth.currentUser.uid);
    userRef.child('records').push({
      'amount': this.tradeAmt,
      'symbol': this.tradeSymbol,
      'time': this.tradeTime,
      'price_int': this.priceInt
    });
    this.hide();
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
