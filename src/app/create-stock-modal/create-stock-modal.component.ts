import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'create-stock-modal',
  templateUrl: './create-stock-modal.component.html',
  styleUrls: ['./create-stock-modal.component.css'],
  outputs: ['onCreateStock', 'onCancel']
})
export class CreateStockModalComponent implements OnInit {
  @Input() newStock: Stock;

  submitted = false;
  onCreateStock: EventEmitter<Stock>;
  onCancel: EventEmitter<Stock>;

  constructor() {
    this.onCreateStock = new EventEmitter();
    this.onCancel = new EventEmitter();
    this.newStock = new Stock(0, '', '');
  }

  createStock(stockCode: HTMLInputElement, stockName: HTMLInputElement) {
    let tmpStockCode = stockCode.value;
    let tmpStockName = stockName.value;
    this.onCreateStock.emit(new Stock(0, tmpStockCode, tmpStockName));
  }

  onSubmit() {
    this.submitted = true;
  }

  cancel() {
    this.submitted = false;
    this.onCancel.emit(new Stock(-1, '', ''));
  }

  ngOnInit() {
    this.newStock = new Stock(0, '', '');
  }

}
