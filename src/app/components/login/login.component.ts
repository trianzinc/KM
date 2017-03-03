import { Component } from '@angular/core';
import {LogInService, User} from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   providers: [LogInService],
})
export class LoginComponent {

    //model: any = {};
    //loading = false;
    //returnUrl: string;
    
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:LogInService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
    
    serverLogin(){
    
    this._service.serverLogin().subscribe(res => {
     console.log(res)
    });
    }
    
    
    
    
}