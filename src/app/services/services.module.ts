import { NgModule } from '@angular/core';
import { StockService } from './stock.service';
import {CurrencyService} from "./currency.service";

@NgModule({
  providers: [
    StockService,
    CurrencyService
  ]
})
export class ServicesModule {}
