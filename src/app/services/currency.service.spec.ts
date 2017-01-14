/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService]
    });
  });

  it('should ...', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
