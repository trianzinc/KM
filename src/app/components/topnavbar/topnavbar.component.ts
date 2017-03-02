import { Component } from '@angular/core';
import {LogInService, User} from '../../services/login.service';

@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css'],
  providers: [LogInService]
})
export class TopnavbarComponent {
    constructor(private _service:LogInService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}