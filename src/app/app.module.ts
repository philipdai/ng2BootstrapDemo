import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockModule } from './stocks/stocks.module';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { routing } from './app.routing';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StockModule,
    ServicesModule,
    DashboardModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
