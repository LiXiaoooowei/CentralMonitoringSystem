import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tradereport',
  templateUrl: './trader-error-report.html',
  styleUrls: [ './trader-error-report.css' ]
})

export class TraderErrorReportComponent {
  issues = [
    {desp: 'Wrong Price Quote', selected: false, category: 'price'},
    {desp: 'Wrong Booking Record', selected: false, category: 'booking'},
    {desp: 'Common Issue 3', selected: false, category: 'undefined'},
    {desp: 'Common Issue 4', selected: false, category: 'undefined'},
    {desp: 'Common Issue 5', selected: false, category: 'undefined'},
    {desp: 'Common Issue 6', selected: false, category: 'undefined'}
  ];
  constructor(private location: Location, private db: AngularFireDatabase, public afAuth: AngularFireAuth ) {
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    this.issues.forEach(function(issue){
      if (issue['selected']) {
        firebase.database().ref().child('issues').push({
          'uid': firebase.auth().currentUser.uid,
          'description': issue['desp'],
          'category': issue['category']
        })
      }
    });
    alert('Submitted Successfully');
    this.goBack();
  }
  change(): void {
    console.log('changed');
  }
}
