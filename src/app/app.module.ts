import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { HomePageComponent } from './home-page/home-page.component';
import {
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { EventsComponent } from './events/events.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FourUpcomingEventsComponent } from './four-upcoming-events/four-upcoming-events.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './Dashboard/staff/staff.component';
import { LogoutComponent } from './logout/logout.component';
import { NewEventComponent } from './Dashboard/new-event/new-event.component';
import { EventsListComponent } from './Dashboard/events-list/events-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomePageComponent,
    LoginComponent,
    EventsComponent,
    BookingsComponent,
    FourUpcomingEventsComponent,
    EventsGalleryComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    StaffComponent,
    LogoutComponent,
    NewEventComponent,
    EventsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
