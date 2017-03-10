import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { URLSearchParams } from "@angular/http";

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
  console.log('delete');
  
     return this.http.delete("http://localhost:3000/logout",{})
        .map((res:Response) => res);
        
        

  
    //localStorage.removeItem("user");
   // this._router.navigate(['login']);
  }
 
  login(user){
    //var authenticatedUser = users.find(u => u.email === user.email);
    
   // if (authenticatedUser && authenticatedUser.password === user.password){
    
     // localStorage.setItem("user", authenticatedUser);
      
     // this._router.navigate(['start']);  
      
     // return true;
    //}
   // return false;
 
  }
  
  
  serverLogin(user){
    
    let data = new URLSearchParams();
    data.append('username', user.email);
    data.append('password', user.password)

    return this.http.post("http://localhost:3000/login",data)
        .map((res:Response) => res);
        
  }
 
  checkCredentials(){
  
    return this.http.post("http://localhost:3000/auth","")
        .map((res:Response) => {
        console.log("From service"+res);
        return res;
        });
  
  } 
  
  registerUser(user){
  
    let data = new URLSearchParams();
    
    data.append('username', user.username);
    data.append('password', user.password);
    data.append('email', user.email)

    return this.http.post("http://localhost:3000/register",data)
        .map((res:Response) => res);
        
  }
  
}