import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { filter, map, reduce, pluck } from 'rxjs/operators';


@Injectable()
export class StockFilterService {
constructor(private http: HttpClient) { }

    apiKey = "&apikey=DA65TS7P9O57VGZH";
    exampleUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo";
    url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
    
    
   
    
    getData(stockID){
        
    return this.http.get(this.url + stockID + this.apiKey)
        .pipe(
        
            pluck("Time Series (Daily)"),    
                
            //takes the data and pushing each key and property into an empty array returns array
            map((data: any) => {
                
                let openStock = [];
                let highStock = [];
                let lowStock = [];
                let closeStock = [];
                let dailyVolume = [];
                
                let stockData = {
                    //This is the format needed for the charts import
                    stockData: [
                        {data: [], label: "Open Amount"},
                        {data: [], label: "Closed Amount"},
                        {data: [], label: "Daily High"},
                        {data: [], label: "Daily Low"},
                        {data: [], label: "Daily Volume Traded"},
                    ],
                    dateData: [],
                    
                };

                for( let key in data ){
                    //Takes each property in the object/array and parses the numbers for the respective properties into 2 decimel rounded nubmers
                    
                    openStock.push(Number((data[key]["1. open"]).slice(0,5)));
                    highStock.push(Number((data[key]["2. high"]).slice(0,5)));
                    lowStock.push(Number((data[key]["3. low"]).slice(0,5)));
                    closeStock.push(Number((data[key]["4. close"]).slice(0,5)));
                    dailyVolume.push(Number((data[key]["5. volume"])));
                    stockData.dateData = Object.keys(data);
                }
                
                
                
                stockData.stockData[0].data = openStock;
                stockData.stockData[1].data = closeStock;
                stockData.stockData[2].data = highStock;
                stockData.stockData[3].data = lowStock;
                stockData.stockData[4].data = dailyVolume;
                
                
                return stockData;
            }),

        )

  }
}
