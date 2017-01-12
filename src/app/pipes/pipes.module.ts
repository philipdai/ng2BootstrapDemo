import { NgModule } from '@angular/core';
import { DateFormatterPipe } from './date-formatter.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    DateFormatterPipe
  ],
  providers: [
    DatePipe
  ],
  exports: [
    DateFormatterPipe
  ]
})
export class PipesModule {
  constructor() {

  }
};
