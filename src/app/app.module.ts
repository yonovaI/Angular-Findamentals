import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreaEvetComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';
import { EventsAppComponent } from './events-app.components';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreaEvetComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreaEvetComponent) {
  if(component.isDirty)
    return window.confirm('Are you sure you want to cancel?');
  return true;
}
