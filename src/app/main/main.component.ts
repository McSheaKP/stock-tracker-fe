import { Component, OnInit } from '@angular/core';
import { StockFilterService } from '../stockfilter.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private _sfs: StockFilterService){}
  
  chartSwitch: boolean = true;
  
  stockData: any;
  userStock: string;
  title: string = "Demo";
  stockDates: any;
  
  stockLookup: any = {
    ticker: "",
  }

   // lineChart
  public lineChartData:Array<any> = 
  [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'},
    {data: [45, 20, 10, 5, 176, 33, 60], label: 'Series D'}
    
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  
   lookUpStocks(ticker){
    this.chartSwitch = false;
    this._sfs.getData(ticker)
      .subscribe( data => {
          this.lineChartData = data.stockData;
          this.lineChartLabels = data.dateData;
          this.title = ticker;
          this.stockLookup.ticker = "";
          this.chartSwitch = true;
      }, err => {
        //when the data does not come back do this
      })  
    //console.log("Stock Data works in component", this.stockData);
    //this.lineChartData = this.stockData;
    }
  

  
  

  ngOnInit() {
    this._sfs.getData(this.userStock)
    .subscribe(data => {
        console.log("data is displayed onit", data)
    })
    
    
  }

}
