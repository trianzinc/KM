import { Component } from '@angular/core';
import {LogInService, User} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
   providers: [LogInService],
})
export class RegisterComponent {

    public user = {}; 
    constructor(private _service:LogInService,private _router: Router){}
    
    register(user){
        
        this._service.registerUser(user).subscribe(res => {
         if(res.status == 200){
             this._router.navigate(['start']); 
         }else{
            this._router.navigate(['login']); 
         }
        
        });
    
    }
}