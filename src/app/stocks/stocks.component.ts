import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { StockMarket } from '../enums/stock-market.enum';


@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  title: string = 'List of Stocks: ';
  stocks: Stock[];
  today: any;
  stockMarkets: string[];
  showStockMarket: boolean = false;
  selectedStockMarket: string;
  myColor: string;
  mySize: string;

  constructor(stockService: StockService) {
    this.stocks = stockService.getStocks();
    this.today = new Date();
    this.stockMarkets = [
      StockMarket[StockMarket.ASX],
      StockMarket[StockMarket.LSE],
      StockMarket[StockMarket.HKSE],
      StockMarket[StockMarket.EURONEXT],
      StockMarket[StockMarket.NASDAQ],
      StockMarket[StockMarket.NYSE]
    ];
    this.myColor = 'BlueViolet';
    this.mySize = '80%';
  }

  toggleShowStockMarkets(): void {
    this.showStockMarket = !this.showStockMarket;
  }

  selectStockMarket(stockMarket: string): void {
    this.selectedStockMarket = stockMarket;
  }

  ngOnInit() {
  }

}
