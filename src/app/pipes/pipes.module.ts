import { NgModule } from '@angular/core';
import { DateFormatterPipe } from './date-formatter.pipe';
import { StockFilterPipe } from './stock-filter.pipe';
import { DatePipe } from '@angular/common';
import { WithParentPipe } from './with-parent.pipe';

@NgModule({
  declarations: [
    DateFormatterPipe,
    StockFilterPipe,
    WithParentPipe
  ],
  providers: [
    DatePipe
  ],
  exports: [
    DateFormatterPipe,
    StockFilterPipe,
    WithParentPipe
  ]
})
export class PipesModule {
  constructor() {

  }
};
