import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events-app.components';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-detail.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreaEvetComponent } from './events/create-event.component';
@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreaEvetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
