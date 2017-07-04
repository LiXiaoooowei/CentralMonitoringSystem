import {Component} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './create-trade-record.component.html',
  styleUrls: ['./create-trade-record.component.css']
})

export class CreateTradeRecordComponent {
  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    console.log('show');
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
