import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public _aus: AppUserService){}
  
  loggedIn: boolean = this._aus.loggedIn;
  
  ngOnInit() {
  }

}
