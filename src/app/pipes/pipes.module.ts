import { NgModule } from '@angular/core';
import { DateFormatterPipe } from './date-formatter.pipe';
import { StockFilterPipe } from './stock-filter.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    DateFormatterPipe,
    StockFilterPipe
  ],
  providers: [
    DatePipe
  ],
  exports: [
    DateFormatterPipe,
    StockFilterPipe
  ]
})
export class PipesModule {
  constructor() {

  }
};
