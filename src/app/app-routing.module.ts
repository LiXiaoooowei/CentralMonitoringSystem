import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './Dashboard/dashboard.component';
import {ErrorPreventionComponent} from './ErrPrevention/error-prevention.component';
import {LoginComponent} from './Login/login.component';
import {TraderErrorReportComponent} from './CustomerErrRpt/trader-error-report';
import {ErrorDetectionComponent} from './ErrDetect/error-detection.component';
import {TradeBookingComponent} from './TradeBookingDetails/trade-booking.component';
import {IssueCatcherComponent} from './IssueCatcher/issue-catcher.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'errprevention/:uid', component: ErrorPreventionComponent},
  { path: 'login', component: LoginComponent},
  { path: 'trader', component: TraderErrorReportComponent},
  { path: 'errdetection', component: ErrorDetectionComponent},
  { path: 'tradebooking', component: TradeBookingComponent},
  { path: 'issuecatcher', component: IssueCatcherComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
