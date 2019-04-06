"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
var header_component_1 = require("./header/header.component");
var main_component_1 = require("./main/main.component");
var login_component_1 = require("./login/login.component");
exports.router = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'header', component: header_component_1.HeaderComponent },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
