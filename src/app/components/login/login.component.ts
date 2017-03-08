import { Component } from '@angular/core';
import {LogInService, User} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   providers: [LogInService],
})
export class LoginComponent {


    
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:LogInService,private _router: Router) {}
 
    login(user) {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
    
    serverLogin(user){
    
        this._service.serverLogin(user).subscribe(res => {
         if(res.status == 200){
             this._router.navigate(['start']); 
         }else{
            this._router.navigate(['login']); 
         }
        
        });
    
    }
    
    
    
    
}