import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoggedComponent } from './logged/logged.component';

import { AppUserService } from './app-user.service';
import { StockFilterService } from './stockfilter.service';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    LoggedComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    routes,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [StockFilterService, AppUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
