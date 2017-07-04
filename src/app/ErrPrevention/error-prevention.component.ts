import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {StockQuoteService} from '../Services/stock-quote.service';

@Component({
  selector: 'app-errprevention',
  templateUrl: './error-prevention.component.html',
  styleUrls: [ './error-prevention.component.css' ]
})

export class ErrorPreventionComponent {
   constructor(
     private location: Location,
     private stockQuoteService: StockQuoteService) {}
   goBack(): void {
     this.stockQuoteService.getQuote();
     this.location.back();
   }
}
