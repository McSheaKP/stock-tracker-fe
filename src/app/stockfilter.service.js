"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var StockFilterService = /** @class */ (function () {
    function StockFilterService(http) {
        this.http = http;
        this.apiKey = "DA65TS7P9O57VGZH";
        this.exampleUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=15min&outputsize=full&apikey=demo";
    }
    StockFilterService.prototype.getData = function () {
        return this.http.get(this.exampleUrl);
        //stockArray(data){
        //    return 
        //}
    };
    StockFilterService = __decorate([
        core_1.Injectable()
    ], StockFilterService);
    return StockFilterService;
}());
exports.StockFilterService = StockFilterService;
