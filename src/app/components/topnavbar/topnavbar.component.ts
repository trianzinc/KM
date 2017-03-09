import { Component } from '@angular/core';
import {LogInService, User} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css'],
  providers: [LogInService]
})
export class TopnavbarComponent {
    constructor(private _service:LogInService,private _router: Router){}
 
    ngOnInit(){
    
       //this._service.checkCredentials().subscribe(res => {
       
        // if(res.status == 200){
         //    this._router.navigate(['start']); 
         //}else{
          //  this._router.navigate(['login']); 
        // }
        
        //});
    }
 
    logout() {
        this._service.logout();
    }
}