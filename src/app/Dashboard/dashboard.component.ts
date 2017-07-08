import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent {
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router ) {}
  navigate(): void {
   this.router.navigate(['./errprevention', this.afAuth.auth.currentUser.uid]);
 }
}
