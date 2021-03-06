import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map, reduce, pluck } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class AppUserService {

  constructor(private http: HttpClient) { }
  
  url:string = environment.dataUrl;
  appUsersUrl: string = "appUsers/";
  loggedIn: boolean = false; 
  user: any = {
      firstName: "TesterUserName",
      lastName: "TestLast",
      email: "test1234@gmail.com",
      password: "1234"
  }
    setHeaders(){
        const options = {
            headers: new HttpHeaders().set('authorization', localStorage.getItem('token'))
        };
        return options;
    }
  
   register(user){
    const httpOptions = this.setHeaders;
    return this.http.post(this.url + this.appUsersUrl,  user );
   }
   
   login(user){
    const httpOptions = this.setHeaders;
    return this.http.post(this.url + this.appUsersUrl + 'login', user );
   }
   
   logged(){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.url + this.appUsersUrl + userId);
   }

   

   favStock(stock){
    let userId = sessionStorage.getItem("userId");
    return this.http.post(this.url + this.appUsersUrl + userId + "/stocks", stock);
   }
   
   
   getUserStocks(){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.url + this.appUsersUrl + userId + "/stocks/")
   }
   
   deleteUserStock(stockId){
     let userId = sessionStorage.getItem("userId");
     return this.http.delete(this.url + this.appUsersUrl + userId + "/stocks/" + stockId)
   }
   
   loginToggle(){
    this.loggedIn = true;
   }
   
   logOutToggle(){
    this.loggedIn = false;
   }
   
}
