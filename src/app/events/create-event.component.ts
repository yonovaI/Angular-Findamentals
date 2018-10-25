import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>Create event form will go here</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="submit" (click)="cancel()" class="btn btn-primary ml-2">Cancel</button>
        </div>
    `
})
export class CreaEvetComponent {
    constructor(private router: Router) {}
    cancel() {
        this.router.navigate(['/events']);
    }
}
