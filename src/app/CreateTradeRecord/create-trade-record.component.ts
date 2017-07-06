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
    const id = this.tradeTime + this.tradeSymbol;
    const userRef = firebase.database().ref().child('traders').child(this.afAuth.auth.currentUser.uid);
    userRef.child('records').child(id).set({
      'amount': this.tradeAmt,
      'symbol': this.tradeSymbol,
      'time': this.tradeTime,
      'price_int': this.priceInt,
      'hide': false
    });
    this.hide();
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
