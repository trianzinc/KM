import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
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
    
       this._service.checkCredentials().subscribe(res => {
       console.log(res)
         if(res.status == 200){
             
         }else{
            this._router.navigate(['login']); 
         }
        
        });
    }
 
    logout() {
        this._service.logout().subscribe(res=>{
        console.log(res)
         if(res.status == 200){
             this._router.navigate(['login']); 
         }
        });
    }
}