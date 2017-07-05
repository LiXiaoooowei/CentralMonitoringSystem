import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() email: string;
  @Input() password: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
      (user) => {
        console.log(user);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {console.log(error)});
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
