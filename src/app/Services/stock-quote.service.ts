import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StockQuoteService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getQuote(): Promise<void> {
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=X484ZBZKOT7MYL4G')
      .toPromise().then(response => console.log(response)).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
