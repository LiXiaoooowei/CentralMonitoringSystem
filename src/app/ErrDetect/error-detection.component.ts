import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-errdetection',
  templateUrl: './error-detection.component.html',
  styleUrls: [ './error-detection.component.css' ]
})

export class ErrorDetectionComponent {
  issues: FirebaseListObservable<any>;
  constructor(private location: Location, private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router ) {
    this.issues = db.list('/issues/');
  }
  navigate(uid): void {
    this.router.navigate(['./errprevention', uid]);
  }
  goBack(): void {
    this.location.back();
  }
}
