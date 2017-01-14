/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockService } from './stock.service';
import { HttpModule } from '@angular/http';

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
