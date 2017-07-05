import {Component, Input} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-popup',
  templateUrl: './create-trade-record.component.html',
  styleUrls: ['./create-trade-record.component.css']
})

export class CreateTradeRecordComponent {
  @Input() tradeTime: String;
  @Input() tradeSymbol: String;
  @Input() tradeAmt: String;
  public visible = false;
  public visibleAnimate = false;

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
    this.hide();
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
