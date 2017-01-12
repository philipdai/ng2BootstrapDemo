import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StockService {

  constructor(private http: Http) { }

  getStocksAPI(): Observable<any> {
    return this.http.get("http://localhost:3000/stocks")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error!'));
  }

  getStocks(): Stock[] {
    return[
      new Stock(1, 'AAPL', 'Apple Computer'),
      new Stock(2, 'IBM', 'International Business Machine'),
      new Stock(3, 'GOOG', 'Google'),
      new Stock(4, 'UBER', 'Uber')];
  }

  createStock(newStockCode: string, newStockName: string): Observable<any> {
    return this.http.post("http://localhost:3000/stocks", {
        stockName: newStockName,
        stockCode: newStockCode });
  }

  updateStock(stockId: number, newStockCode: string, newStockName: string): Observable<any> {
    return this.http.put("http://localhost:3000/stocks/" + stockId, {
      stockName: newStockName,
      stockCode: newStockCode
    });
  }

  deleteStock(stockId: number): Observable<any> {
    return this.http.delete("http://localhost:3000/stocks/" + stockId);
  }
}
