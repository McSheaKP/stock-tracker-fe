import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  constructor(private _aus: AppUserService, private router: Router){}
  
  
 
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  
  userData: any;
  
  doRegister(){
    this._aus.register(this.user)  
       .subscribe( (res: any) => {
            
             sessionStorage.setItem('token', res.token);
             sessionStorage.setItem('userId', res.userId);
             let token = sessionStorage.getItem('token');
             let userId = sessionStorage.getItem('userId');
             this.gotoLogin();
             
    })
            
  }
  gotoLogin() {
              this.router.navigate(['login']);
  }
  deleteRegister(){
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.email = "";
    this.user.password = "";
  }
  
  ngOnInit() {
    
    
  }

}
