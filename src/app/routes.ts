import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreaEvetComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index';
import { Error404Component } from './errors/404.component';
 export const appRoutes: Routes = [
    {path: 'events/new', component: CreaEvetComponent, canDeactivate: ['canDeactivateCreateEvent']},
     {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
     {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
     {path: '404', component: Error404Component},
     {path: '', redirectTo: '/events', pathMatch: 'full'},
     {path: 'user', loadChildren: './user/user.module#UserModule'}
 ];
