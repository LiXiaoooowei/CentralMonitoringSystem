import {Component} from '@angular/core';
import {Location} from '@angular/common';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-issuecatcher',
  templateUrl: './issue-catcher.component.html',
  styleUrls: [ './issue-catcher.component.css' ]
})

export class IssueCatcherComponent {
  issueRecords: FirebaseListObservable<any>;
  constructor(private location: Location, private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.issueRecords = db.list('/issuerecords/');
  }
  goBack(): void {
    this.location.back();
  }
}
