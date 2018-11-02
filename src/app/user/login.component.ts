import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName;
    passsword;

    constructor(private authSvc: AuthService){}
    login(value) {
        this.authSvc.loginUser(value.userName, value.passsword);
    }
}
