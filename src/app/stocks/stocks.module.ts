import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { StocksComponent } from './stocks.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    StocksComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    StocksComponent
  ]
})
export class StockModule {}
