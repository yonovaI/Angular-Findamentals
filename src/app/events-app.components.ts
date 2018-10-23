import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
       <div class="container">
            <nav-bar></nav-bar>
            <events-list></events-list>
       </div>
    `
})

export class EventsAppComponent {
    title = 'app';
}
