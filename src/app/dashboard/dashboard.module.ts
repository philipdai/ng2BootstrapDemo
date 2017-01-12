import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import { DashboardComponent } from './dashboard.component';
import { CreateStockModalComponent } from '../create-stock-modal/create-stock-modal.component';

@NgModule({
  declarations: [
    CreateStockModalComponent,
    DashboardComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
