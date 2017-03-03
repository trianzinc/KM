import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23'),
  new User('pratik','pratik')
];
 
@Injectable()
export class LogInService {
 
  constructor(
    private _router: Router,private http:Http){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    
    if (authenticatedUser && authenticatedUser.password === user.password){
    
      localStorage.setItem("user", authenticatedUser);
      
      this._router.navigate(['start']);  
      
      return true;
    }
    return false;
 
  }
  
  
  serverLogin(){
    return this.http.get("http://localhost:3000/")
    .map((res:Response) => res.json());
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}