"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var angular_1 = require("@clr/angular");
var stockfilter_service_1 = require("./stockfilter.service");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var main_component_1 = require("./main/main.component");
var app_router_1 = require("./app.router");
var login_component_1 = require("./login/login.component");
var header_component_1 = require("./header/header.component");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                login_component_1.LoginComponent,
                header_component_1.HeaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.ClarityModule,
                app_router_1.routes,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [stockfilter_service_1.StockFilterService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
