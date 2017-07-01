import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-errprevention',
  templateUrl: './error-prevention.component.html',
  styleUrls: [ './error-prevention.component.css' ]
})

export class ErrorPreventionComponent {
   constructor(private location: Location) {}
   goBack(): void {
     this.location.back();
   }
}
