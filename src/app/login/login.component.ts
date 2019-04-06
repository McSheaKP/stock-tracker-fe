import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _aus: AppUserService, private router: Router ){}

  user: any = {
    email: "",
    password: ""
  }
  
  
  
  doLogin(){
    this._aus.login(this.user)  
       .subscribe( (res: any) => {
             sessionStorage.setItem('token', res.token);
             sessionStorage.setItem('userId', res.userId);
             let token = sessionStorage.getItem('token');
             let userId = sessionStorage.getItem('userId');
             this._aus.loginToggle;
             this.gotoLoggedIn();
             this._aus.loggedIn = true;
             
    })
  }
  
  gotoLoggedIn() {
    this.router.navigate(['logged']);
  }
  
  deleteLogin(){
    this.user.email = "";
    this.user.password = "";
  }

  ngOnInit() {
    
  }

}
