import { Component, OnInit, Input } from '@angular/core';
import { StockService } from "../services/stock.service";
import { Stock } from '../models/stock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() newStock: Stock;

  stocks: Stock[];
  selectedStock: Stock;
  updateEnabled: boolean = false;
  createNewModal: boolean = false;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks() {
    this.stockService.getStocksAPI()
      .subscribe(
        data => this.stocks = data,
        error => console.log('Server Error')
      );
  }

  createStock(newStockCode: string, newStockName: string) {
    this.createNewModal = false;
    this.stockService.createStock(newStockCode, newStockName)
      .subscribe(data => this.getAllStocks());
  }

  updateStock(newStockCode: string, newStockName: string) {
    this.stockService.updateStock(this.selectedStock.id, newStockCode, newStockName)
      .subscribe(data => this.getAllStocks());
    this.updateEnabled = false;
  }

  deleteStock(stock: Stock) {
    this.stockService.deleteStock(stock.id)
      .subscribe(data => this.getAllStocks());
  }

  loadDetails(stock: Stock) {
    this.updateEnabled = true;
    this.selectedStock = stock;
  }

  initialNewStock() {
    this.newStock = new Stock(0, '', '');
    this.createNewModal = true;
  }

  cancelInitialNewStock() {
    this.createNewModal = false;
  }
}
