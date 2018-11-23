import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well heverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [class.green]="getStartTimeClass" [ngSwitch]="event?.time">
    Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">Early start</span>
            <span *ngSwitchCase="'10:00 am'">Late start</span>
            <span *ngSwitchDefault>Normal start</span>
    </div>
    <div>Price: {{event?.price}}</div>
    <div>
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div>
        Online URL: {{event?.location?.onlineUrl}}
    </div>
</div>
    `,
    styles: [`
        .pad-left { margin-left: 10px },
        .green {color: #003300 !important},
        .well.heverwell.thumbnail { min-height: 210px },
        .well div { color: red; }
    `]
})
export class EventThumbnailComponent {
    @Input()
    event: IEvent;

    getSttTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}
