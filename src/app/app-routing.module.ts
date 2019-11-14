import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { StaffComponent } from './Dashboard/staff/staff.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'Home',
    component: HomePageComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Events',
    component: EventsComponent
  },
  {
    path: 'Bookings',
    component: BookingsComponent
  }
  ,
  {
    path: 'Dashboard/Admin',
    component: DashboardComponent
  },
  {
    path: 'Dashboard/Staff',
    component: StaffComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
