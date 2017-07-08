import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-errdetection',
  templateUrl: './trade-booking.component.html',
  styleUrls: [ './trade-booking.component.css' ]
})

export class TradeBookingComponent {
  issues: FirebaseListObservable<any>;
  constructor(private location: Location, private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router ) {
    this.issues = db.list('/issues/');
  }

  goBack(): void {
    this.location.back();
  }
}
